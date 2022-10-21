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