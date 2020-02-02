#!/usr/bin/python

import sqlite3
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS

import hashlib
import classifier
from passlib.hash import sha256_crypt


c = classifier

app = Flask(__name__, static_folder='Resumes',)
CORS(app)
api = Api(app)

conn = sqlite3.connect('users.db')
conn.execute("CREATE TABLE IF NOT EXISTS USERS ( NAME CHAR(50) NOT NULL, EMAIL CHAR(100) NOT NULL, PASSWORD CHAR(100) NOT NULL); ")
conn.commit()
conn.close()

job_types = {
    "Database Manager": ['database'],
    "Graphic Designer": ['designer', 'frontend'],
    "Mobile App Developer": ['mobile'],
    "Software Developer": ['programmer'],
    "Web Developer": ['frontend', 'backend', 'database'],
    "Data Engineer": ['database', 'machinelearning'],
    "ML Developer": ['machinelearning', 'deeplearning'],
    "Blockchain Developer": ['blockchain'],
    "Data Scientist": ['r', 'python'],
    "AR Developer": ['ar'],
    "Game Developer": ['game']
}


class signup(Resource):

    def get(self):
        email=request.args.get('email')
        fname=request.args.get('fname')
        password=request.args.get('pass')
        try:
            password = sha256_crypt.encrypt(password)
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
    res = {}
    def get(self):
        email=request.args.get('email')
        password=request.args.get('pass')
        res = {}
        pwd=""
        try:
            conn = sqlite3.connect('users.db')
            cursor = conn.execute(f"SELECT * FROM USERS WHERE EMAIL='{email}'")
            for row in cursor:
                pwd = row[2]
            conn.commit()
            conn.close()
            if sha256_crypt.verify(password, pwd) :
                res = {"status":"200"}
            else:
                res={"status":"401"}
        except:
            res = {"status":"500"}
        return res


class search(Resource):
    def get(self):
        param=request.args.get('param')
        typeOfParam=request.args.get('typeOfParam')
        print(param)
        print(type(param))
        if typeOfParam=='0':
            print('inside 0--------------------->')
            passOn=job_types[param]
            ranks=c.call.skills_search(passOn)
        else:
            newSet = set()
            df = c.call.keyword_dict
            for i in range(len(df)):
                for j in range(len(df.iloc[i])):
                    for p in param.split(','):
                        if(df.iloc[i,j] == p):
                            newSet.add(df.columns[j])
            print(newSet)
            passOn=list(newSet)
            print('below one is list passOn')
            print(passOn)
            ranks=c.call.skills_search(passOn)
        return {"ranks":ranks,"cookie":passOn}


class recommend(Resource):
    def get(self, cookie):
        ranks = c.call.recommend_search(cookie)
        return ranks


api.add_resource(signup, '/signup')
api.add_resource(login, '/login')
api.add_resource(search, '/search')
api.add_resource(recommend, '/recommend')
app.run(host='0.0.0.0',debug=False)

