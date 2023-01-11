#Qfaults workflow for the UGS Hazards Application

# Import arcpy module
###this has to be run while connected to the VPN
import arcpy
arcpy.env.overwriteOutput = True

#Default workspace - note if the dataset is not in the default geodatabase within the script, you must include its entire path
Default_gdb = r"your default gdb"
arcpy.env.workspace = Default_gdb

############################      Inputs     ###########################################################################################################

#Faults that need to be added to the Hazards app from the SDE - these two variables will have a different selections if some data is being added or replaced

#faults that need to be deleted from hazards app/or replaced with new faults (check to see if these only need to be deleted in Study Area)
HazFaultnum= "FaultNum IN ('997a', '997b')"


#faults that need to be extracted from SDE and added to hazards app

SDEFaultnum= "FaultNum IN ('997a', '997b','998a','998b','998c')"

#Input data from Hazards SDE for selecting faults (new data) #Add path to GDB here
Input__Qfaults_from_SDE = r"Qfaults SDE location"

#Inupt current haz app data

#link to new fault reports
usgs_link = "'https://earthquake.usgs.gov/cfusion/qfault/show_report_AB_archive.cfm?fault_id=1004&section_id=b'"

#citation of new data
citation = "!Citation! + "; " + str('Knudsen and others, 2021')"

################################ OUTPUTS ################################################################ change values

#the two final feature classes - one of the feature classes will go into the Hazards app and Gordon's AGOL map, the other feature class will be submitted to the AGRC
#the final feature class for the hazards application
finalfeatureclass="\\finalqfaults_forHazApp"



###############################interim steps - don't need to be changed ###################################################

#don't worry about the feature class below - its an interim step that never needs to be changed
#Create a variable for the dissolved feature class (interim step - consider writing this to in_memory)
newfeatureclass2 = "C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\newfeatureclass2"


###########################################################################################################################

# Step 1 - Process: Make a feature layer of the new data (NewFaultData) so that a feature class with selected faults can be created
arcpy.MakeFeatureLayer_management(Input__Qfaults_from_SDE, 'in_memory\Qfaults_SDELayer', "", "", "OBJECTID OBJECTID VISIBLE NONE;Shape Shape VISIBLE NONE;FaultNum FaultNum VISIBLE NONE;FaultZone FaultZone VISIBLE NONE;FaultName FaultName VISIBLE NONE;SectionName SectionName VISIBLE NONE;StrandName StrandName VISIBLE NONE;MappedScale MappedScale VISIBLE NONE;DipDirection DipDirection VISIBLE NONE;SlipSense SlipSense VISIBLE NONE;SlipRate SlipRate VISIBLE NONE;MappingConstraint MappingConstraint VISIBLE NONE;FaultClass FaultClass VISIBLE NONE;FaultAge FaultAge VISIBLE NONE;Label Label VISIBLE NONE;DateCreated DateCreated VISIBLE NONE;LastModified LastModified VISIBLE NONE;Citation Citation VISIBLE NONE;Shape_Length Shape_Length VISIBLE NONE")
# assign desc as a variable to say something about the SDE Feature Layer
descLayer = arcpy.Describe('in_memory\Qfaults_SDELayer')
print("Name: {} Feature Layer was successfully created".format(descLayer.name))
result = int(arcpy.GetCount_management('in_memory\Qfaults_SDELayer').getOutput(0))
print("The record count for the SDE layer is " + str(result))

# Step 2 - Process: Feature Class to Feature Class - Select faults from the SDE that you want to append to the Hazards app - Create a feature class of selected faults using the SDEFaultnum variable
arcpy.FeatureClassToFeatureClass_conversion('in_memory\Qfaults_SDELayer', Default_gdb, "tempSDE, SDEFaultnum)


descSelected=arcpy.Describe(Default_gdb+"\\tempSDE)
print("Name: {} Feature Class was successfully created".format(descSelected.name))
resultSelect = int(arcpy.GetCount_management(Default_gdb+"\\tempSDE).getOutput(0))
print("The record count for the SDE fault selection is " + str(resultSelect))

#Step 3 - project new data into WGS84

#Step 4 create lower case variables for Dip Direction and Slip Sense
arcpy.CalculateField_management(Default_gdb+"\\tempSDE, "DipDirection", "!DipDirection!.lower()", "PYTHON", "")
arcpy.CalculateField_management(Default_gdb+"\\tempSDE, "SlipSense", "!SlipSense!.lower()", "PYTHON", "")


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
arcpy.CopyFeatures_management("HazFaults2_Layer", "C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\templayer", "", "0", "0", "0")
NewMasterQfault="C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\templayer"
Num3=str(arcpy.GetCount_management(NewMasterQfault))
print("Dataset with " + Num3 + " faults successfully created.")


# Step 10 - Process: Append - new fault data to Hazards data - also make slip sense lowercase for output and add labels to new faults
arcpy.Append_management(Default_gdb+"\\tempSDE, NewMasterQfault, "NO_TEST")
arcpy.CalculateField_management(NewMasterQfault, "SlipSense", "!SlipSense!.lower()", "PYTHON", "")
arcpy.CalculateField_management(NewMasterQfault, "DipDirection", "!DipDirection!.lower()", "PYTHON", "")
arcpy.CalculateField_management("MasterQfaultsLyr", "Label", 'str(!FaultZone!) + " " + str( !SectionName!) + " " + str( !StrandName!)', "PYTHON_9.3", "")
arcpy.CalculateField_management("MasterQfaultsLyr", "Label", '!Label!.replace("None","")', "PYTHON_9.3", "")
arcpy.SelectLayerByAttribute_management("MasterQfaultsLyr", "CLEAR_SELECTION", "")
arcpy.CalculateField_management("MasterQfaultsLyr", "Label", "!Label!.lstrip(\" \")", "PYTHON_9.3", "")

arcpy.SelectLayerByAttribute_management("MasterQfaultsLyr", "NEW_SELECTION", HazFaultnum)
#arcpy.CalculateField_management("featureclassLyr", "USGS_Link", usgs_link, "PYTHON_9.3", "")
arcpy.CalculateField_management("MasterQfaultsLyr", "Citation", citation, "PYTHON_9.3", "")
arcpy.SelectLayerByAttribute_management("MasterQfaultsLyr", "CLEAR_SELECTION", "")





arcpy.CopyFeatures_management("MasterQfaultsLyr", "G:\\My Drive\\PROJECTS\\Hazards\\map\\working_map\\Qfault_update_30Sep21.gdb"+MasterQfaults, "", "0", "0", "0")

#Overwrite the master qfaults layer with the feature layer that had its label field cleaned up -this is the final AGRC q faults that needs to be uploaded to AGOL
NewMasterQfault2=Default_gdb + MasterQfaults
Num4 = str(arcpy.GetCount_management(NewMasterQfault2))
Num5 = str(arcpy.GetCount_management(Default_gdb+"\\tempSDE))
print("The new Hazards data now has " + Num4 + " faults. This is a result of adding " + Num5 + " faults from the SDE to the " + Num3 + " faults from the Hazards app." )

# Step 11 - Process: Make Feature Layer of the newly created feature class so that the selection can be removed
arcpy.MakeFeatureLayer_management(NewMasterQfault2, "HazFaults_CopyFeatures_Layer")
#arcpy.MakeFeatureLayer_management(NewMasterQfault, "HazFaults_CopyFeatures_Layer", "", "", "OBJECTID OBJECTID VISIBLE NONE;Shape Shape VISIBLE NONE;FaultNum FaultNum VISIBLE NONE;FaultZone FaultZone VISIBLE NONE;FaultName FaultName VISIBLE NONE;SectionName SectionName VISIBLE NONE;StrandName StrandName VISIBLE NONE;MappedScale MappedScale VISIBLE NONE;DipDirection DipDirection VISIBLE NONE;SlipSense SlipSense VISIBLE NONE;SlipRate SlipRate VISIBLE NONE;MappingConstraint MappingConstraint VISIBLE NONE;FaultClass FaultClass VISIBLE NONE;FaultAge FaultAge VISIBLE NONE;Label Label VISIBLE NONE;Summary Summary VISIBLE NONE;USGS_Link USGS_Link VISIBLE NONE;Notes Notes VISIBLE NONE;Citation Citation VISIBLE NONE;Shape_Length Shape_Length VISIBLE NONE")
Num6 = str(arcpy.GetCount_management("HazFaults_CopyFeatures_Layer"))

# Step 12 - Process: Select Layer By Attribute - Remove selection from data so Dissolve works on entire dataset
arcpy.SelectLayerByAttribute_management("HazFaults_CopyFeatures_Layer", "CLEAR_SELECTION", "")

# Step 13 - Process: Dissolve the new feature class - dissolve on all fields except default (i.e. OID, Shape fields)
arcpy.Dissolve_management("HazFaults_CopyFeatures_Layer", newfeatureclass2, "FaultNum;FaultZone;FaultName;SectionName;StrandName;MappedScale;DipDirection;SlipSense;SlipRate;MappingConstraint;FaultClass;FaultAge;Label;Summary;USGS_Link;Notes;Citation", "", "MULTI_PART", "DISSOLVE_LINES")
Num7 = str(arcpy.GetCount_management(newfeatureclass2))
print("Dataset with " + Num7 + " dissolved faults successfully created.")


# Step 14 - Process: Add QffHazard Field to the dissolved feature class for the reporting tool
arcpy.AddField_management(newfeatureclass2, "QFFHazardUnit", "TEXT", "", "", "15", "", "NULLABLE", "NON_REQUIRED", "")

# Step 15 - Process: Add Description Field to the dissolved feature class for the reporting tool
arcpy.AddField_management(newfeatureclass2, "Description", "TEXT", "", "", "400", "", "NULLABLE", "NON_REQUIRED", "")


# Step 16 - Process: Calculate QffHazardUnit Field
arcpy.CalculateField_management(newfeatureclass2, "QFFHazardUnit", "!FaultNum! +str(!OBJECTID!)+\"qff\"", "PYTHON_9.3", "")

arcpy.MakeFeatureLayer_management(newfeatureclass2, "featureclassLyr", "", "", "FaultNum FaultNum VISIBLE NONE;FaultZone FaultZone VISIBLE NONE;FaultName FaultName VISIBLE NONE;SectionName SectionName VISIBLE NONE;StrandName StrandName VISIBLE NONE;MappedScale MappedScale VISIBLE NONE;DipDirection DipDirection VISIBLE NONE;SlipSense SlipSense VISIBLE NONE;SlipRate SlipRate VISIBLE NONE;MappingConstraint MappingConstraint VISIBLE NONE;FaultClass FaultClass VISIBLE NONE;FaultAge FaultAge VISIBLE NONE;Label Label VISIBLE NONE;Summary Summary VISIBLE NONE;USGS_Link USGS_Link VISIBLE NONE;Notes Notes VISIBLE NONE;Citation Citation VISIBLE NONE;QFFHazardUnit QFFHazardUnit VISIBLE NONE;Description Description VISIBLE NONE")


# Step 17 - Process: Calculate Field - Clean up the Section field so that you can add it to the Description

# Replace a layer/table view name with a path to a dataset (which can be a layer file) or create the layer/table view within the script
# The following inputs are layers or table views: "finalqfaults_forHazApp"



arcpy.SelectLayerByAttribute_management(in_layer_or_view="featureclassLyr", selection_type="NEW_SELECTION", where_clause="SectionName IS NOT NULL")
arcpy.CalculateField_management("featureclassLyr", "SectionName", "!SectionName! + \" section\"", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "SectionName", "!SectionName!.replace(\"section section\",\"section\")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "SectionName", "!SectionName!.replace(\"Section section\",\"section\")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "SectionName", "!SectionName!.replace(\"Section section\",\"section\")", "PYTHON_9.3", "")
arcpy.SelectLayerByAttribute_management("featureclassLyr", "CLEAR_SELECTION", "")


arcpy.SelectLayerByAttribute_management(in_layer_or_view="featureclassLyr", selection_type="NEW_SELECTION", where_clause="SectionName = ' section'")
arcpy.CalculateField_management("featureclassLyr", "SectionName", "!SectionName!.lstrip()", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr","SectionName", '!SectionName!.replace("section","")', "PYTHON_9.3", "")
arcpy.SelectLayerByAttribute_management("featureclassLyr", "CLEAR_SELECTION", "")

#Now calculate the label field
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION","Label = ''")
arcpy.SelectLayerByAttribute_management("featureclassLyr", "ADD_TO_SELECTION","Label IS NULL")
arcpy.CalculateField_management("featureclassLyr", "Label", "!FaultName!", "PYTHON_9.3", "")
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION","Label = ''")
arcpy.SelectLayerByAttribute_management("featureclassLyr", "ADD_TO_SELECTION","Label IS NULL")
arcpy.CalculateField_management("featureclassLyr", "Label", 'str(!FaultZone!) + " " + str( !SectionName!) + " " + str( !StrandName!)', "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "Label", '!Label!.replace("None","")', "PYTHON_9.3", "")
arcpy.SelectLayerByAttribute_management("featureclassLyr", "CLEAR_SELECTION", "")
arcpy.CalculateField_management("featureclassLyr", "Label", "!Label!.lstrip()", "PYTHON_9.3", "")




# Step 18 - Process: Make Feature Layer out of feature class so that selections can be made
#arcpy.MakeFeatureLayer_management(newfeatureclass2, "featureclassLyr", "", "", "FaultNum FaultNum VISIBLE NONE;FaultZone FaultZone VISIBLE NONE;FaultName FaultName VISIBLE NONE;SectionName SectionName VISIBLE NONE;StrandName StrandName VISIBLE NONE;MappedScale MappedScale VISIBLE NONE;DipDirection DipDirection VISIBLE NONE;SlipSense SlipSense VISIBLE NONE;SlipRate SlipRate VISIBLE NONE;MappingConstraint MappingConstraint VISIBLE NONE;FaultClass FaultClass VISIBLE NONE;FaultAge FaultAge VISIBLE NONE;Label Label VISIBLE NONE;Summary Summary VISIBLE NONE;USGS_Link USGS_Link VISIBLE NONE;Notes Notes VISIBLE NONE;Citation Citation VISIBLE NONE;QFFHazardUnit QFFHazardUnit VISIBLE NONE;Description Description VISIBLE NONE")

# Step 19 - Process: Select Layer By Attribute - Undetermined age
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION", "FaultAge = 'Undetermined' ")

# Step 20 - Process: Calculate Description Field with FaultAge=Undetermined selected
arcpy.CalculateField_management("featureclassLyr", "Description", "str(!FaultZone!)+ \" \" + str(!FaultName!) + \" \" + str(!SectionName!)+ \" \" +  str(!StrandName!)+ \" is a\" + str(!SlipSense!) + \" fault that was mapped at\" + \" \" +  str(!MappedScale!) + \" scale. Geologic studies have not determined the age or slip rate of the fault.\"", "PYTHON_9.3", "")

# Step 21 - Process: Select Layer By Attribute - Known Age
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION", "NOT FaultAge = 'Undetermined'")

# Step 22 - Process: Calculate Field - Description with Known age selected
arcpy.CalculateField_management("featureclassLyr", "Description", "str(!FaultZone!) + \" \" + str(!FaultName!) + \" \" + str(!SectionName!) + \" \" + str(!StrandName!) + \"  is a\" + \" \" + str(!SlipSense!) + \" fault that was mapped at\" + \" \" + str(!MappedScale!) + \" scale. Geologic studies have determined that the fault has had movement in the last\" + \" \" + str(!FaultAge!) + \"  years and has a slip rate of\" + \" \" + str(!SlipRate!) +\".\"", "PYTHON_9.3", "")


# Step 23 - Process: Select Layer By Attribute - Anticline, Monocline
arcpy.SelectLayerByAttribute_management("featureclassLyr", "NEW_SELECTION", "SlipSense = 'Anticline' OR SlipSense = 'Monocline' OR SlipSense = 'Syncline'")

# Step 24 - Process: Calculate Description Field with Anticline, Monocline and Syncline selected - I think this needs to be the last selection in the bunch
arcpy.CalculateField_management("featureclassLyr", "Description", "str(!FaultZone!) + \" \" + str(!FaultName!) + \" \" +  str(!SectionName!) + \" \" +  str(!StrandName!) + \"  is a\" + \" \" + str(!SlipSense!) + \" that was mapped at\" + \" \" +  str(!MappedScale!) + \" scale. Geologic studies have determined that the structure has had movement in the last\" + \" \" + str(!FaultAge!) + \" years and has a slip rate of\" + \" \" + str(!SlipRate!) +\".\" ", "PYTHON_9.3", "")


# Step 25 - Process: Select Layer By Attribute and clear the selection
arcpy.SelectLayerByAttribute_management("featureclassLyr", "CLEAR_SELECTION", "")

# Step 26 - Process: Clean up Description field - make sure slip sense is lower case
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Undetermined\",\"undetermined\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"unnamed Quaternary\",\"Unnamed Quaternary\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Reverse\",\"reverse\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Monocline\",\"monocline\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Syncline\",\"syncline\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Anticline\",\"anticline\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"None\",\"\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"  \",\" \")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"<Null>\",\"\")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"  \",\" \")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.lstrip(\" \")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Normal\",\"normal\")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"Unknown\",\"unknown\")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "Description", "!Description!.replace(\"anormal\",\"a normal\")", "PYTHON_9.3", "")
arcpy.CalculateField_management("featureclassLyr", "SlipSense", "!SlipSense!.lower()", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Label", "str(!FaultZone!) + \" \" + str(!FaultName!) + \" \" + str(!SectionName!) + \" \" + str(!StrandName!)", "PYTHON"
, "")
arcpy.CalculateField_management("featureclassLyr", "Label", "!Label!.replace(\"None\",\"\")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Label", "!Label!.replace(\"  \",\" \")", "PYTHON", "")
arcpy.CalculateField_management("featureclassLyr", "Label", "!Label!.lstrip()", "PYTHON_9.3", "")

# Step 27 - Process: Add Field for the Reporting tool
arcpy.AddField_management("featureclassLyr", "Haz_Name", "TEXT", "", "", "50", "", "NULLABLE", "NON_REQUIRED", "")

# Step 28 - Process: Calculate Field - Haz_Name = Quaternary Fault
arcpy.CalculateField_management("featureclassLyr", "Haz_Name", "\"Quaternary Fault\"", "VB", "")

# Step 29 - Clean up dip direction for haz app

dct={"e":"east","ne":"northeast","nw":"northwest","s":"south","se":"southeast","sw":"southwest","w":"west","n":"north","N":"north", "NE":"northeast","E":"east" , "SE":"southeast", "S":"south" ,"SW":"southwest","W":"west","NW":"northwest","Unspecified":"unspecified", "Unspecified ":"unspecified"}

with arcpy.da.UpdateCursor("featureclasslyr","DipDirection")as cursor:
    for row in cursor:
        if row [0] in dct:
            row[0] = dct[row[0]]
            cursor.updateRow(row)


arcpy.CalculateField_management("featureclassLyr", "DipDirection", "!DipDirection!.lower()", "PYTHON", "")

# Step 30 - output the final CSV for the HazardUnitTexTable
# Process: Table to Table
arcpy.TableToTable_conversion("featureclassLyr", OutputCSV, OutputCSVname, "", "QFFHazardUnit \"QFFHazardUnit\" true true false 15 Text 0 0 ,First,#,C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\NewSDE_DataFaults,QFFHazardUnit,-1,-1;Description \"Description\" true true false 400 Text 0 0 ,First,#,C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\NewSDE_DataFaults,Description,-1,-1;Haz_Name \"Haz_Name\" true true false 50 Text 0 0 ,First,#,C:\\Users\\marthajensen\\Documents\\ArcGIS\\Default.gdb\\NewSDE_DataFaults,Haz_Name,-1,-1", "")

# Step 31 - figure out what field names are in the final feature class before you drop them
field_names = [f.name for f in arcpy.ListFields('featureclassLyr')]
# uncomment below if you want to see the field names
# print("The field_names in the Hazards App Fault data are " + str(field_names))



# Step 32 - Process: Feature Class to Feature Class conversion to put the final hazard app (new) feature class where you want it - its currently being stored in my default_gdb
arcpy.FeatureClassToFeatureClass_conversion("featureclassLyr", Default_gdb, finalfeatureclass)

#Step 33 - drop the fields you don't want from the final feature class

arcpy.DeleteField_management(Default_gdb+finalfeatureclass, dropFields)

print ("Is the citation field fully filled out in the qfaults feature class?")
print ("Is the USGS link field fully filled out in the qfaults feature class?")
print("Does gordon have the new dataset for the UGRC?")
print("Has the output CSV been added to the HazardUnitTextTable? - delete old qff stuff in table first")
print("Have the Mapped Areas and Surface Fault Rupture Zones been modified for the new qfaults?")
print ("Is the Repor_ID field filled out in Mapped Areas? The data in the field is the end of the URL that should be displayed in the app")
print("Has Gordon added the new qfaults to the AGOL webmap so that the reporting tool works?")
print("Has someone looked at the LUCID flow chart for adding qfaults?")
print("Has someone looked at the qfaults schema wiki on github?")
print("Once ready, this data should be added to the qfaults PRO project on the geology server - make sure the qfaults labels feature class are filled out for the Server service too")

print("Done with qfaults!")

