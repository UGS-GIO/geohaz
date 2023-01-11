import psycopg2

import pandas as pd

user="sde"
password="password"
host="server"
port="5432"
database="ugsgwp"

conn = psycopg2.connect(dbname=database,user=user,password=password,host=host)

cur=conn.cursor()

#cur.execute ("SELECT readingdate,measuredlevel,temperature,baroefficiencylevel,measureddtw, driftcorrection, waterelevation,locationid,conductivity From sde.reading Where locationid IN (0,1,2,3,4,5);")
data=pd.read_sql_query("SELECT readingdate,measuredlevel,temperature,baroefficiencylevel,measureddtw, driftcorrection, waterelevation,locationid,conductivity From sde.reading Where locationid IN (0,1,2,3,4,56,7,8,11,12,13,14,15,16,17,18,19,20,21,22, 23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41, 42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59, 60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,136,1001,1002,1003,1004, 1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023, 1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042, 1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067, 1068,1069,1070,1071,1072,1073,1076,1077,1078,1079,1080,1081,1090,1091,1092,1093,1094,1095,1096, 1097,1098,4000,4001,4002,4003,4004,4005,4010,4011,4012,4013,4014,4015,4016,4017,4018,4020,4021,4030,4031,4040, 4041,4042,4043,4044,4045,4046,4047,4048,4049,5050,5051,5052,5053,5055,5056,9003,9024,9025,9027,9049,9070, 10001,10002,10003,10004,10005,10006,10007,10008,10009,10010,10011,10012,10013,10014,10015,10016);", con=conn)


#Things to add: Order by locationid in select statement, loop through data and select out one location id each time - instead of grouping the entire dataset first

for locationid, data in data.groupby('locationid'):
    data.to_csv(r"C:\Users\marthajensen\Desktop\CopyCommand\locationid{}_output.csv".format(locationid))



cur.close()
conn.close()

