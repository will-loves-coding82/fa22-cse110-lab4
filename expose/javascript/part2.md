## 1. What will happen at line 12 and why? If the code causes an error, explain why. 
Line 12 will print 3 since i was declared as a var inside a for loop block. 
This means its reference ignores block scope

## 2. What will happen at line 13 and why? If the code causes an error, explain why. 
Line 13 will print the array [150,100,50]
 

## 3. What will happen at line 14 and why? If the code causes an error, explain why. 
Line 14 will print 150
 

## 4. What will this function return? Give a brief explanation why. If the code causes an error explain why.
The function will return an array of final discounted prices [150, 100, 50]

## 5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
It will throw a reference error since i was declared as a "let" variable. Therefore it is local
to the for loop block, not outside.

## 6. What will happen at line 13 and why? If the code causes an error, explain why. 
This will also throw a reference error since discountedPrice was declared inside the for loop. 
Line 13 is outside the block of code so it doesn't have access

## 7. What will happen at line 14 and why? If the code causes an error, explain why. 
It will print 150

## 8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
The function will still return the array (150,100,50)

## 9. What will happen at line 11 and why? If the code causes an error, explain why. 
Line will try to print the iterating variable i however this will cause an error since i
was declared as a let variable which is block-scope local

## 10. What will happen at line 12 and why? If the code causes an error, explain why.
It will print the length of the input array which is 3

##  11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
This will not return anything. The function will not execute any code past line 7 since it attempts
to change the empty array which is defined as a constant.


## 12a. Accessing the value of the name property in the student object
 `student.name`

### 12b. Accessing the value of the Grad Year property in the student object
`student["Grad Year"]`

### 12c. Calling the function for the greeting property in the student object
`student.greeting()`

## 12d. Accessing the name property of the object in the Favorite Teacher property in student
`student["Favorite Teacher"].name`

## 12e. Access the first index in the array of the courseLoad property of the student object
`student.courseload[0]`

## 13a. '3'+2
Outputs 32 since the integer 2 maps to its exact string representation '2' 
so this is essentially string concatenation

## 13b. '3'-2
Outputs the number 1. '3' was converted to an integer to perform substraction of 2

## 13c. 3+null
Outputs the number 3 since null maps to 0

## 13d. '3'+null
Outputs '3null' since null becomes a string to concatenate with '3'

## 13e. true+3
Outputs 4 since true is the same as 1

## 13f. false+null
Since false maps to the int 0 and null map to 0 as well

## 13g. '3'+undefined
'3undefined' since undefined was converted to a string

## 13h. '3'-undefined
Outputs NaN since  '3' became an int but any operation with NaN will output NaN

## 14a. '2'>1
'2' is converted to its integer representation so 2 is greater 1. So it outputs true

## 14b. '2'<'12'
Outputs false since it performs string comparison character by character.
Since the first characters compared are '2' and '1', '2' is certainly larger so this inequality is false

## 14c.  2=='2'
Outputs true since the string '2' becomes a number 2 which is equal to 2

## 14d.  2==='2'
This comparison is type sensitive so 2 and '2' are not the same data types. Returns false

## 14e.  true==2
Outputs false since true maps to 1 and 1 is not equal to 2

## 14f.  true===Boolean(2)
Boolean will evalaute anything with a value to true. Since true is equal to true, this outputs true

## 15. Explain the difference between the == and === operators
They are very similar but the === will also compare datatypes

