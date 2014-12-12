/*

 Developer: Bryan Wong

 Date: 11-10-2014

 Description: Using the JavaScript language, have the function Division(num1,num2)
 take both parameters being passed and return the Greatest Common Factor. That is,
 return the greatest number that evenly goes into both numbers with no remainder.
 For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
 The range for both parameters will be from 1 to 10^3.

 Input = 12 & num2 = 16     Output = 4
 Input = 7 & num2 = 3       Output = 1
 Input = 36 & num2 = 54     Output = 18

 */


function Division(num1,num2) {

    var factors1 = []; // holds the factors for num1
    var factors2 = []; // holds the factors for num2
    var gcf = 0; // holds the greatest common factor

    // Checks the factors of num1
    for(var i = 0; i <= num1; i++){
        if(num1%i == 0){
            factors1.push(i);
        }

    }

    // Checks the factors of num2
    for(var j =0; j <= num2; j++){
        if(num2%j ==0){
            factors2.push(j);
        }
    }

    // Finding the GCF.
    for(var k = 0; k < factors1.length; k++){
        var start = k;
        for(var l = 0; l < factors2.length; l++){

            if(factors1[start] == factors2[l]){

                if(factors1[start] > gcf){
                    gcf = factors1[start];
                }
            }
        }
    }

    console.log(gcf);
}

console.log("Test vector num1 = 12 and num2 = 16");
Division(12,16);
console.log();
console.log("Test vector num1 = 7 and num2 = 3");
Division(7,3);
console.log();
console.log("Test vector num1 = 36 and num2 = 54");
Division(36,54);
console.log();
console.log("Test vector num1 = 1000 and num2 = 555");
Division(1000,555);
console.log();