/*

 Developer: Bryan Wong

 Date: 09-13-2014

 Description:

 Using the JavaScript language, have the function DivisionStringified(num1,num2) take both
 parameters being passed, divide num1 by num2, and return the result as a string with properly
 formatted commas. If an answer is only 3 digits long, return the number with no commas
 (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and
 num2 is 10000 the output should be "12,345".

 Input = 123456789  & num2 = 10000  Output = "12,345"
 Input = 5 & num2 = 2               Output = "3"
 Input = 6874 & num2 = 67           Output = "103"


 */

function DivisionStringified(num1,num2) {

    var divide = num1/num2;         // divides num1 with num2.
    var count =0;                   // count for adding comma
    var final = [];                 // the array that stores the final output.

    if(divide > 999){
        divide = Math.floor(divide); // rounds all numbers 1k and above down.
    }

    else{
        divide = Math.round(divide); // round the numbers to nearest whole number.
    }

    var result = divide.toString();  // convert divide to string.
    var myArray = result.split("");  // array of result in in parts.

    for(var i = myArray.length; i >= 0; i--){
        final.unshift(myArray[i]);
        count++;
        // adds the comma when the comma is appropriate.
        if(count == 4 && myArray.length >=4){
            final.unshift(",");
            count = 1;
        }
    }

    result = final.join("");        // sets the result to the final form with comma in proper place.

    return result;

}

console.log("Test vector: 123456789, 10000");
console.log(DivisionStringified(123456789, 10000)); // 12,345
console.log();
console.log("Test vector: 5, 2");
console.log(DivisionStringified(5, 2)); // 3
console.log();
console.log("Test vector: 6874, 67");
console.log(DivisionStringified(6874, 67)); // 103
console.log();
console.log("Test vector: 1000000, 1000");
console.log(DivisionStringified(10000000000, 1000)); // 10,000,000
console.log();