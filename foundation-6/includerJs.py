#!/usr/local/bin/python3

from sys import argv,exit

if len(argv) != 2:
	print("Please provide an .html file name.")
	exit()

contents = []
with open(argv[1], "r") as f:
	for line in f:
		contents.append(line.rstrip('\n'))

output = []

output.append("document.write('\\\n")
output.append("\\\n")
for line in contents:
	output.append(line + "\\" + "\n")

output.append("\\\n")
output.append("');\n")

response = "y"
if response == "y":
	outputName = argv[1].split(".")[0] + ".js"
	with open(outputName, "w") as f:
		f.writelines(output)

print("Done!")