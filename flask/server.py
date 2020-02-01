#!/usr/bin/python

import sqlite3
from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api=Api(app)

conn = sqlite3.connect('users.db')
conn.execute("CREATE TABLE IF NOT EXISTS USERS ( NAME CHAR(50) NOT NULL, EMAIL CHAR(100) NOT NULL, PASSWORD CHAR(100) NOT NULL); ")
conn.commit()
conn.close()

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

api.add_resource(signup, '/signup=<string:email>&&<string:fname>&&<string:password>')
api.add_resource(login, '/login=<string:email>&&<string:password>')
app.run(host='10.0.129.135',debug=True)
