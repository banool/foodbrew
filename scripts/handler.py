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
        elif action == "getSupplierNamePhoto":
            getSupplierNamePhoto(dbObj, form)
        elif action == "getSupplierDescription":
            getSupplierDescription(dbObj, form)
        elif action == "getCollectorsGrid3":
            getCollectorsGrid3(dbObj)
        else:
            print("???")
    except KeyError:
        print("<h1>Woops!</h1>")
        print("<p>Looks like you've come straight to this page without actually making an entry!</p>")
        print("<p>Go back to the <a href='Insert Page and try again :)")

        db.commit()

def loginForm(dbObj):
    print("""<ul class="menu"> <li><a href="#">Profile</a></li> </ul>""")


def getSupplierGrid(dbObj):
    dbObj.execute("SELECT user_id, name, photo FROM User WHERE user_id IN (SELECT supplier_id FROM Supplier);")
    userData = dbObj.fetchall()

    for item in userData:
        square = """<div class="column"><a href="/thinkers?id=%s"><img class="thumbnail" width=450px height=450px src="%s"><h5 style="text-align:center">%s</h5></div> """ % (item[0], item[2], item[1])
        print(square*7)

def getCollectorGrid(dbObj):
    dbObj.execute("SELECT user_id, name, photo FROM User WHERE user_id IN (SELECT collector_id FROM Collector) LIMIT 3")
    userData = dbObj.fetchall()

    for item in userData:
        square = """<div class="column"><a href="/thinkers?id=%s"><img class="thumbnail" width=250px height=250px src="%s"><h5 style="text-align:center">%s</h5></div> """ % (item[0], item[2], item[1])
        print(square)

def getSupplierNamePhoto(dbObj, form):
    supplierID = form["supplierID"].value
    dbObj.execute("SELECT photo, name FROM User WHERE user_id=%s" % supplierID)
    userData = dbObj.fetchall()

    print("""<img class="thumbnail" src="%s" width=150px height=150px style="display: inline-block; margin-right:20px">
    <h1 style="display: inline-block;" id="supplierName">%s</h1>""" % (userData[0][0], userData[0][1]))

def getSupplierDescription(dbObj, form):
    supplierID = form["supplierID"].value
    dbObj.execute("SELECT description FROM User WHERE user_id=%s" % supplierID)
    userData = dbObj.fetchall()

    print(userData[0][0])

entryPoint()