### (1) It will print the value of (prices.length - 1). Becauese we declare i with var, so we can still access the value of i after the for loop. In the for loop, i is equal to prices.length -1  in the end.

### (2) It will print 150. In the last round in the for loop. The value of discountedPirce is updated to 150 in line 7. Since it is intilized with var, then we can still access if after the loop.

### (3) It will print 150. In the last round in the for loop. The value of finalPrice is updated to 150 in line 8. Since it is intilized with var, then we can still access if after the loop.

### (4) The function will return the array discounted with value of [50, 100, 150]. The function takes in an array of prices and a discont factor. Then it calculated each price after the discount then return an array that has the discounted prices.

### (5) There will be an error. We declare i with let in the for loop, so we do not have access to i outside of the for loop because it is out of scope.

### (6) There will be an error. We declare discountedPirce with let in the for loop, so we do not have access to i outside of the for loop because it is out of scope. 

### (7) It will print 150. In the last round in the for loop. The value of finalPrice is updated to 150 in line 8. Since it is intilized with let in the scope of function discountPirces, then we can still access if after the loop since it is still in the scope of discountPrices.

### (8) The function will return the array discounted with value of [50, 100, 150]. The function takes in an array of prices and a discont factor. Then it calculated each price after the discount then return an array that has the discounted prices.


### (9)There will be an error. The variable i is declared wtih let and the scope of it is the for loop. So we do not have access to i outside of the scope.

### (10) It will return the value 'prices.length'. Since it is declared with const in line 4, the value of it will not change.

### (11) There will be errors as we run the function. In line 7 , we declare discountPrices with const so the variable discountPrices can not be reassigned or redeclared. However, eveytime we go into forloop, we are trying to redeclare discountPrices.

### (12)
 - A. student.name
 - B.  student['Grad Year']
 - C. student.greeting()
 - D. const value = student["Favorite teacher"]; value.name ;
 - E. var array = student.courseLoad ;  array[0] ; 

### (13)
 - A. '32' As we add them, 2 was converted to a string, so we just combine two strings.
 - B.  1  '3' was converted to integer, so just do the subtraction and then return an integer
 - C.  3 ignore null and keep the integer unchanged
 - D. '3null' null is converted to a string and then combine two strings.
 - E. 4 the boolean variable true can be converted to 1 , then we do the number addition
 - F. 0 the boolean variable false can be converted to 0 , then we do the number addition and ignore null
 - G. '3undefined' undefined can be converted to a string, then we just combine two strings.
 - H. NaN '3' is a string and undefined is also a string but we can not just subtract two strings.

### (14)
 - A. true. string '2' becomes number 2 and number 2 > 1.
 - B. false. Since both '2' and '12' are strings, at first we just compare the first character of each string, 2 > 1 , so '2' > '12'.
 - C. true.  '2' was converted to number 2.
 - D. false.  === will check the type of each comparator, since one is number and the other is string, the statement returned false.
 - E. false. true was converted to 1 and 1 is not equal to 2.
 - F. true. boolean(2) will return true since 2 is greater than 1. Then true == true.

### (15) == will check the if the values are equal without checking the types of each comparators. === will check the type of each comparators. If two comparators are in different types, then the statement will return false immediately.

### (16)

