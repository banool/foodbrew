#!/usr/bin/python

import cgitb, cgi
cgitb.enable()
import MySQLdb
from sys import exit
MYSQL_pwd="pass1234"

print("Content-Type: text/html\n")

def entryPoint():
    form = cgi.FieldStorage()
    
    db = MySQLdb.connect(host="localhost", user="daniel", passwd=MYSQL_pwd, db="fft")
    dbObj = db.cursor()

    # Ascertaining what action we're meant to perform
    try:
        action = form["action"].value
        if action == "login":
            loginForm(dbObj)
        elif action == "getSupplierGrid":
            getSupplierGrid(dbObj)
        elif action == "formData":
            info = prepareInfo(dbObj, form)
            if info == False:
                # Exiting if it didn't work properly.
                exit()
            else:
                print("An unexpected request was received, exiting.")
                exit()
    except KeyError:
        print("<h1>Woops!</h1>")
        print("<p>Looks like you've come straight to this page without actually making an entry!</p>")
        print("<p>Go back to the <a href='Insert Page and try again :)")

        db.commit()

def loginForm(dbObj):
    print("Hey IT'S ME!!")


def getSupplierGrid(dbObj):
    dbObj.execute("SELECT name, photo FROM User")
    userData = dbObj.fetchall()

    for item in userData:
        square = """<div class="column"><img class="thumbnail" src="%s"><h5>%s</h5></div> """ % (item[1], item[0])
        print(square)

def getSupplierName(dbObj):


entryPoint()