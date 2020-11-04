#Qfaults workflow for the UGS Hazards Application

# Import arcpy module
import arcpy
arcpy.env.overwriteOutput = True

############################      Inputs     ###########################################################################################################

#Default workspace - note if the dataset is not in default in the script, you must include its entire path
Default_gdb = "C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb"
arcpy.env.workspace = Default_gdb

#Faults that need to be added to the Hazards app from the SDE - these two variables will have a different selections if some data is being added or replaced
HazFaultnum= "FaultNum = '1004a' "
SDEFaultnum= "FaultNum = '1004a' OR FaultNum = '1004A' "

#Input data from SDE for selecting faults (original data)
Input__Qfaults_from_SDE = r"M:\Shared drives\UGS_Shared\Kleber\Qfaults\Qfaults.gdb\Qfaults_SDE_09302020"

#Unmodified faults from Haz app (the "Master" version of the Qfaults) (fc before the dissolve)
Qfaults_in_Haz_App = "M:\\Shared drives\\UGS_AGRC_Projects\\Hazards Application\\Master_QfaultsData\\Qfaults_AGRC.gdb\\Qfaults"

#Create a variable for the dissolved feature class (interim step)
newfeatureclass2 = "C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\newfeatureclass2"

#the fields that should be dropped from the feature service at the very end of the script - this should remain the same always
dropFields = ["QFFHazardUnit", "Description", "Haz_Name"]

###############################   Outputs   ################################################################################################################

#Output: Name and location of feature class for Hazards app
finalfeatureclass='HazFaultsAppData'

#Output: Create location for output of reporting tool CSV
OutputCSV=r"C:\Users\marthajensen\Desktop"

############################################################################################################################################################

# Step 1 - Process: Make a feature layer of the new data from Emily (SDE data) so that a feature class with selected faults can be created
arcpy.MakeFeatureLayer_management(Input__Qfaults_from_SDE, 'in_memory\Qfaults_SDELayer', "", "", "OBJECTID OBJECTID VISIBLE NONE;Shape Shape VISIBLE NONE;FaultNum FaultNum VISIBLE NONE;FaultZone FaultZone VISIBLE NONE;FaultName FaultName VISIBLE NONE;SectionName SectionName VISIBLE NONE;StrandName StrandName VISIBLE NONE;MappedScale MappedScale VISIBLE NONE;DipDirection DipDirection VISIBLE NONE;SlipSense SlipSense VISIBLE NONE;SlipRate SlipRate VISIBLE NONE;MappingConstraint MappingConstraint VISIBLE NONE;FaultClass FaultClass VISIBLE NONE;FaultAge FaultAge VISIBLE NONE;Label Label VISIBLE NONE;DateCreated DateCreated VISIBLE NONE;LastModified LastModified VISIBLE NONE;Citation Citation VISIBLE NONE;Shape_Length Shape_Length VISIBLE NONE")
# assign desc as a variable to say something about the SDE Feature Layer
descLayer = arcpy.Describe('in_memory\Qfaults_SDELayer')
print("Name: {} Feature Layer was successfully created".format(descLayer.name))
result = int(arcpy.GetCount_management('in_memory\Qfaults_SDELayer').getOutput(0))
print("The record count for the SDE layer is " + str(result))

# Step 2 - Process: Feature Class to Feature Class - Select faults from the SDE that you want to append to the Hazards app - Create a feature class of selected faults using the SDEFaultnum variable
arcpy.FeatureClassToFeatureClass_conversion('in_memory\Qfaults_SDELayer', Default_gdb, "tempSDE", SDEFaultnum)


descSelected=arcpy.Describe(Default_gdb+"\\tempSDE")
print("Name: {} Feature Class was successfully created".format(descSelected.name))
resultSelect = int(arcpy.GetCount_management(Default_gdb+"\\tempSDE").getOutput(0))
print("The record count for the SDE fault selection is " + str(resultSelect))

#Step 3 - Remove domain from SDE layer if its there so that domain issues don't end up in final version
#Before running this tool, make sure your dataset has been moved to a standalone database!

domains = ['QFaultMapScale','DipDirection','SlipSense',
           'QFaultSlipRate','QFaultConstraint_1','QFaultClass','QFaultAge']

for field in arcpy.ListFields(Default_gdb+"\\tempSDE"):
        if field.domain in domains:
            arcpy.RemoveDomainFromField_management(Default_gdb+"\\tempSDE",field.name)
            print "%s domain removed."%str(field.domain)


#Step 4 create lower case variables for Dip Direction and Slip Sense
arcpy.CalculateField_management(Default_gdb+"\\tempSDE", "DipDirection", "!DipDirection!.lower()", "PYTHON", "")
arcpy.CalculateField_management(Default_gdb+"\\tempSDE", "SlipSense", "!SlipSense!.title()", "PYTHON", "")


# Step 5 - Process: Feature Class to Feature Class - Create a new feature class of the Hazard app data so that the original is not overwritten
arcpy.FeatureClassToFeatureClass_conversion(Qfaults_in_Haz_App, Default_gdb, 'HazFaults2')

descHaz = arcpy.Describe('HazFaults2')
print("Name: {} is a copy of the Hazards app feature service. It was successfully created.".format(descHaz.name))
resultHaz = int(arcpy.GetCount_management('HazFaults2').getOutput(0))
print("The record count for the Hazards App Fault Data is " + str(resultHaz))
field_names = [f.name for f in arcpy.ListFields('HazFaults2')]
print("The field_names in the Hazards App Fault data are " + str(field_names))


# Step 6 -Process: Make Feature Layer of the copied Hazards app data so that the selection tool can be used
arcpy.MakeFeatureLayer_management('HazFaults2', "HazFaults2_Layer")

# Step 7 - Process: Select faults to delete from the Hazard app layer
arcpy.SelectLayerByAttribute_management("HazFaults2_Layer", "NEW_SELECTION", HazFaultnum)
Num = str(arcpy.GetCount_management("HazFaults2_Layer"))
print("The amount of faults selected to be deleted from the current Hazards app data are " + Num)

# Step 8 - Process: Switch Selection - This makes it possible to copy the data that is not to be deleted (i.e. drop selected data from dataset)
arcpy.SelectLayerByAttribute_management("HazFaults2_Layer", "SWITCH_SELECTION", "")
Num2=str(arcpy.GetCount_management("HazFaults2_Layer"))
print("The original hazards layer had " + str(resultHaz) + " faults. " + Num + " faults were removed. The new hazards layer has " + Num2 + " faults.")

# Step 9 - Process: Copy Features
arcpy.CopyFeatures_management("HazFaults2_Layer", "C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\InterimHazData", "", "0", "0", "0")
InterimHazData="C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\InterimHazData"
Num3=str(arcpy.GetCount_management(InterimHazData))
print("Dataset with " + Num3 + " faults successfully created.")

# Step 10 - Process: Append - new fault data to Hazards data
arcpy.Append_management(Default_gdb+"\\tempSDE", InterimHazData, "NO_TEST")
Num4 = str(arcpy.GetCount_management(InterimHazData))
Num5 = str(arcpy.GetCount_management(Default_gdb+"\\tempSDE"))
print("The new Hazards data now has " + Num4 + " faults. This is a result of adding " + Num5 + " faults from the SDE to the " + Num3 + " faults from the Hazards app." )

# Step 11 - Process: Make Feature Layer of the newly created feature class so that the selection can be removed
arcpy.MakeFeatureLayer_management(InterimHazData, "HazFaults_CopyFeatures_Layer")
Num6 = str(arcpy.GetCount_management("HazFaults_CopyFeatures_Layer"))

# Step 12 - Process: Select Layer By Attribute - Remove selection from data so Dissolve works on entire dataset
arcpy.SelectLayerByAttribute_management("HazFaults_CopyFeatures_Layer", "CLEAR_SELECTION", "")

# Step 13 - Process: Dissolve the new feature class - dissolve on all fields except default (i.e. OID, Shape fields)
arcpy.Dissolve_management("HazFaults_CopyFeatures_Layer", newfeatureclass2, "FaultNum;FaultZone;FaultName;SectionName;StrandName;MappedScale;DipDirection;SlipSense;SlipRate;MappingConstraint;FaultClass;FaultAge;Label;Summary;USGS_Link;Notes;Citation", "", "MULTI_PART", "DISSOLVE_LINES")
Num7 = str(arcpy.GetCount_management(newfeatureclass2))
print("Dataset with " + Num7 + " dissolved faults successfully created.")

# Step 14 - Process: Add QffHazard and Description Field to the dissolved feature class for the reporting tool
arcpy.AddField_management(newfeatureclass2, "QFFHazardUnit", "TEXT", "", "", "15", "", "NULLABLE", "NON_REQUIRED", "")
arcpy.AddField_management(newfeatureclass2, "Description", "TEXT", "", "", "400", "", "NULLABLE", "NON_REQUIRED", "")

# Step 15 - Process: Calculate QffHazardUnit Field
arcpy.CalculateField_management(newfeatureclass2, "QFFHazardUnit", "!FaultNum! +str(!OBJECTID!)+ 'qff' ", "PYTHON_9.3", "")

# Step 16 - Process: Calculate Field - Clean up the Section field so that you can add it to the Description and cleanup white spaces
arcpy.CalculateField_management(newfeatureclass2, "SectionName", "!SectionName! + \" section\"", "PYTHON", "")

with arcpy.da.UpdateCursor (newfeatureclass2, "SectionName") as updateRows:
    for updateRow in updateRows:
        if updateRow[0]== None:
            updateRow[0]=updateRow[0]
        else:
            updateRow[0]=updateRow[0].replace("section section","section").replace("Section section", "section")
        updateRows.updateRow(updateRow)

#Strip off leading and trailing spaces in each field - needs to be done before calculating the Description field
updateFields = ["FaultZone","FaultName", "SectionName", "StrandName", "SlipSense", "MappedScale","FaultAge","SlipRate"]

with arcpy.da.UpdateCursor (newfeatureclass2, updateFields) as updateRows:
    for updateRow in updateRows:
        if updateRow[0]== None:
            updateRow[0]=updateRow[0]
        else:
            updateRow[0]=updateRow[0].lstrip("").rstrip("")
        updateRows.updateRow(updateRow)


# Step 17 - Process: Make Feature Layer out of feature class so that selections can be made
arcpy.MakeFeatureLayer_management(newfeatureclass2, "featureclassLyr", "", "", "FaultNum FaultNum VISIBLE NONE;FaultZone FaultZone VISIBLE NONE;FaultName FaultName VISIBLE NONE;SectionName SectionName VISIBLE NONE;StrandName StrandName VISIBLE NONE;MappedScale MappedScale VISIBLE NONE;DipDirection DipDirection VISIBLE NONE;SlipSense SlipSense VISIBLE NONE;SlipRate SlipRate VISIBLE NONE;MappingConstraint MappingConstraint VISIBLE NONE;FaultClass FaultClass VISIBLE NONE;FaultAge FaultAge VISIBLE NONE;Label Label VISIBLE NONE;Summary Summary VISIBLE NONE;USGS_Link USGS_Link VISIBLE NONE;Notes Notes VISIBLE NONE;Citation Citation VISIBLE NONE;QFFHazardUnit QFFHazardUnit VISIBLE NONE;Description Description VISIBLE NONE")

# Step 18 - Process: Select Layer By Attribute - Undetermined age
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION", "FaultAge = 'Undetermined' ")


# Step 19 - Process: Calculate Description Field with FaultAge=Undetermined selected
arcpy.CalculateField_management("featureclassLyr", "Description","str(!FaultZone!) + ' ' + str(!FaultName!) + ' ' + str(!SectionName!) + ' ' +  str(!StrandName!) + ' ' +  'is a' + ' ' + str(!SlipSense!) + ' ' + 'fault that was mapped at' + ' ' +  str(!MappedScale!) + ' ' + 'scale. Geologic studies have not determined the age or slip rate of the fault.'" , "PYTHON_9.3")


# Step 20 - Process: Select Layer By Attribute - Known Age
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION", "NOT FaultAge = 'Undetermined'")

# Step 21 - Process: Calculate Field - Description with Known age selected
arcpy.CalculateField_management("featureclassLyr", "Description", "str(!FaultZone!) + ' ' + str(!FaultName!) + ' ' + str(!SectionName!) + ' ' + str(!StrandName!)  + ' ' +  'is a' + ' ' +  str(!SlipSense!) + ' ' + 'fault that was mapped at' + ' ' +  str(!MappedScale!) + ' ' + 'scale. Geologic studies have determined that the fault has had movement in the last' + ' ' + str(!FaultAge!) + ' ' + 'years and has a slip rate of' + ' ' + str(!SlipRate!) +'.' ", "PYTHON_9.3", "")


# Step 22 - Process: Select Layer By Attribute - Anticline, Monocline, Syncline
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION", "SlipSense = 'Anticline' OR SlipSense = 'Monocline' OR SlipSense = 'Syncline'")

# Step 23 - Process: Calculate Description Field with Anticline, Monocline and Syncline selected
arcpy.CalculateField_management("featureclassLyr", "Description", "str(!FaultZone!) + ' ' + str(!FaultName!) + ' ' +  str(!SectionName!) + ' ' +  str(!StrandName!) + ' ' +  'is a' + ' ' + str(!SlipSense!) + ' ' + 'that was mapped at' + ' ' +  str(!MappedScale!) + ' ' + 'scale. Geologic studies have determined that the structure has had movement in the last' + ' ' + str(!FaultAge!) + ' ' + 'years and has a slip rate of' + ' ' + str(!SlipRate!) +'.' ", "PYTHON_9.3", "")


# Step 24 - Process: Select Layer By Attribute and clear the selection
arcpy.SelectLayerByAttribute_management("featureclassLyr", "CLEAR_SELECTION", "")


# Step 25 - Process: Clean up Description field
updateFieldsList = ["Description"]

with arcpy.da.UpdateCursor ("featureclasslyr", updateFieldsList) as updateRows:
    for updateRow in updateRows:
        if updateRow[0]== None:
            updateRow[0]=updateRow[0]
        else:
            updateRow[0]=updateRow[0].replace("Undetermined","undetermined").replace("unnamed Quaternary", "Unnamed Quaternary").replace("Reverse", "reverse") \
            .replace("Monocline", "monocline").replace("Syncline", "syncline").replace("Anticline", "anticline").replace('None',' ') \
            .replace('<Null>', ' ').replace("anormal", "a normal").replace("Normal", "normal").replace('    ', ' ').replace('   ', ' ').replace('  ', ' ').replace('a anticline', 'an anticline')
        updateRows.updateRow(updateRow)


# Step 26 - Process: Add Field for the Reporting tool
arcpy.AddField_management("featureclassLyr", "Haz_Name", "TEXT", "", "", "50", "", "NULLABLE", "NON_REQUIRED", "")

# Step 27 - Process: Calculate Field - Haz_Name = Quaternary Fault for the CSV
arcpy.CalculateField_management("featureclassLyr", "Haz_Name", "'Quaternary Fault'", "PYTHON", "")

# Step 28 - Clean up dip direction field - this field sometimes has coded domains and sometimes doesn't
#first convert dip direction to lowercase
arcpy.CalculateField_management("featureclassLyr", "DipDirection", "!DipDirection!.lower()", "PYTHON", "")

#create a dictionary of values to change
dct={"n":"north", "ne":"northeast","e":"east" , "se":"southeast", "s":"south" ,"sw":"southwest","w":"west","nw":"northwest","Unspecified":"unspecified"}
with arcpy.da.UpdateCursor("featureclasslyr","DipDirection")as cursor:
    for row in cursor:
        if row [0] in dct:
            row[0] = dct[row[0]]
            cursor.updateRow(row)


# Step 29 - Process: Table to Table for final CSV
arcpy.TableToTable_conversion("featureclassLyr", OutputCSV, "HazFaultDataForReports.csv", "", "QFFHazardUnit \"QFFHazardUnit\" true true false 15 Text 0 0 ,First,#,C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\NewSDE_DataFaults,QFFHazardUnit,-1,-1;Description \"Description\" true true false 400 Text 0 0 ,First,#,C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\NewSDE_DataFaults,Description,-1,-1;Haz_Name \"Haz_Name\" true true false 50 Text 0 0 ,First,#,C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\NewSDE_DataFaults,Haz_Name,-1,-1", "")

field_names = [f.name for f in arcpy.ListFields('featureclassLyr')]
print("The field_names in the Hazards App Fault data are " + str(field_names))

# Step 30 - Process: Drop fields and create final feature class
arcpy.FeatureClassToFeatureClass_conversion("featureclassLyr", Default_gdb, finalfeatureclass)
arcpy.DeleteField_management(finalfeatureclass, dropFields)


print("Done")

