from loopFunc import looper

def main():
	looper(7)

if __name__ == "__main__":
	main()

# Line 6 means, when the name of the file being run is 
# __name__, then do everything under 
# this if block. In this case, it will call the main function.
# The reason for this demo is to show that when importing and
# invoking a function from another file, if it is not called
# within a function inside the invoking origin file, python
# will read and execute all code within the file the function
# is being imported from, and not just the function that is 
# being imported and needed. In this file, the imported 
# function `looper` will run but the print statement within
# the same file (loopFunc.py), will not be read and executed.
# This is because the imported file is inside of a function
# main() in THIS file so once the function has been invoked
# and finishes, it continues to read the code in this file
# not the file from which the function was imported.

## This can also be the case for the reverse scenario where the 
# main function is in the same file as the function being imported.
# Consider figure 1 below.

# Figure 1
#------------------
# originFunc.py
#------------------
# def printer(i):
# 	print('strawberry cough');
# 	return i;

##################################################################
# If this for loop below were not inside the main() function, then
# when the printer() function gets invoked from importedFunc.py
# then the for loop would be ran as well as the printer() function.
# Having the loop in main ensures that it will only run when python 
# is running originFunc.py

# for i in range(7): 
# 		print("{}".format(printer(i)))
##################################################################

# def main():
# 	for i in range(7):
# 		print("{}".format(printer(i)))

# if __name__ == "__main__":
# 	main();

#------------------
# importedFunc.py
#------------------
# from originFunc import printer

# printer("<3")
