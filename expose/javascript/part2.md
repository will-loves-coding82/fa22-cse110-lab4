###### 1. What will happen at line 12 and why? If the code causes an error, explain why. 
#    Line 12 will print 3 since i was declared as a var inside a for loop block. 
#     This means its reference ignores block scope

###### 2. What will happen at line 13 and why? If the code causes an error, explain why. 
#    Line 13 will print the array [150,100,50]
# 

###### 3. What will happen at line 14 and why? If the code causes an error, explain why. 
#    Line 14 will print 150
# 

###### 4. What will this function return? Give a brief explanation why. If the code causes an error explain why.
#    The function will return an array of final discounted prices [150, 100, 50]

###### 5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
#    It will throw a reference error since i was declared as a "let" variable. Therefore it is local
#    to the for loop block, not outside.

###### 6. What will happen at line 13 and why? If the code causes an error, explain why. 
#    This will also throw a reference error since discountedPrice was declared inside the for loop. 
#    Line 13 is outside the block of code so it doesn't have access

###### 7. What will happen at line 14 and why? If the code causes an error, explain why. 
#    It will print 150

###### 8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
#    The function will still return the array (150,100,50)

###### 9. What will happen at line 11 and why? If the code causes an error, explain why. 
#    Line will try to print the iterating variable i however this will cause an error since i
#    was declared as a let variable which is block-scope local

###### 10. What will happen at line 12 and why? If the code causes an error, explain why.
#     It will print the length of the input array which is 3

###### 11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
#    This will not return anything. The function will not execute any code past line 7 since it attempts
#    to change the empty array which is defined as a constant.
#
###### Accessing the value of the name property in the student object
#      student.name

###### Accessing the value of the Grad Year property in the student object
#      student["Grad Year"]

###### Calling the function for the greeting property in the student object
#      student.greeting()

###### Accessing the name property of the object in the Favorite Teacher property in student
#      student["Favorite Teacher"].name

###### Access the first index in the array of the courseLoad property of the student object
#      student.courseload[0]

  

