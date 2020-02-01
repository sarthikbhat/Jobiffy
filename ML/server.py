#!/usr/bin/python

import sqlite3
from flask import Flask, request
from flask_restful import Resource, Api

import classifier

c=classifier

app = Flask(__name__,static_folder='Resumes',)
api=Api(app)

conn = sqlite3.connect('users.db')
conn.execute("CREATE TABLE IF NOT EXISTS USERS ( NAME CHAR(50) NOT NULL, EMAIL CHAR(100) NOT NULL, PASSWORD CHAR(100) NOT NULL); ")
conn.commit()
conn.close()

job_types={
    "Database Manager":['database'],
    "Graphic Designer":['designer','frontend'],
    "Mobile App Developer":['mobile'],
    "Software Developer":['programmer'],
    "Web Developer":['frontend','backend','database'],
    "Data Engineer":['database','machinelearning'],
    "ML Developer":['machinelearning','deeplearning'],
    "Blockchain Developer":['blockchain'],
    "Data Scientist":['r','python'],
    "AR Developer":['ar'],
    "Game Developer":['game']
}

class signup(Resource):

	def get(self, email, fname, password):
		try:
			conn = sqlite3.connect('users.db')
			conn.execute(f"INSERT INTO USERS VALUES ( '{fname}', '{email}', '{password}' )")
			cursor = conn.execute("SELECT * FROM USERS")
			for row in cursor:
				print(row)
			conn.commit()
			conn.close()
			return{"status":"200"}
		except:
			return{"status":"500"}
		
class login(Resource):
	def get(self, email, password):
		try:
			conn = sqlite3.connect('users.db')
			cursor = conn.execute(f"SELECT * FROM USERS WHERE EMAIL='{email}'")
			for row in cursor:
				if password == row[2]:
					res = {"status":"200"}
				else:
					res = {"status":"401"}
			conn.commit()
			conn.close()
		except:
			res = {"status":"500"}
		return res

class search(Resource):
    def get(self,param,typeOfParam):
        if typeOfParam=='0':
            print('inside 0--------------------->')
            ranks=c.call.skills_search(job_types[param])
        else:
            newSet = set()
            #param = "java, python"
            df=c.call.keyword_dict
            for col in df.columns:
                for parameter in param.split(","):
                    if(df[col].any() == parameter):
                        newSet.add(col)
            ranks=c.call.skills_search(list(newSet))
        return ranks


class recommend(Resource):
    def get(self,cookie):
        ranks=c.call.recommend_search(cookie)
        return ranks
        

api.add_resource(signup, '/signup=<string:email>&&<string:fname>&&<string:password>')
api.add_resource(login, '/login=<string:email>&&<string:password>')
api.add_resource(search, '/search=<string:param>&&<string:typeOfParam>')
api.add_resource(recommend, '/recommend=<string:cookie>')
app.run(debug=False)
