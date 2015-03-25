/*
 Developer: Bryan Wong

 Date: 12-10-2014

 Description:
 Using the JavaScript language, have the function FormattedDivision(num1,num2)
 take both parameters being passed, divide num1 by num2, and return the result
 as a string with properly formatted commas and 4 significant digits after the
 decimal place. For example: if num1 is 123456789 and num2 is 10000 the output
 should be "12,345.6789". The output must contain a number in the one's place
 even if it is a zero.

 Input = 123456789 & num2 = 10000       Output = "12,345.6789"
 Input = 2 & num2 = 3                   Output = "0.6667"
 Input = 10 & num2 = 10                 Output = "1.0000"

 */

function FormattedDivision(num1,num2) {

/*
1.divide the numbers
2. format the result
3. return the formatted number.
 */

    var count = 0;
    var result = num1/ num2;

    console.log(result);

    var format = result.toString();

    console.log("length is: " + format.length);

    var arr = format.split("");
    console.log(arr);
    var output = [];

    for(var i = 0; i < arr.length; i++){

    }

}

//test vectors

console.log("Test vectors 123456789 & num2 = 10000");
console.log(FormattedDivision(123456789,10000));
console.log();
console.log("Test vectors 2 & num2 = 3");
console.log(FormattedDivision(2,3));
console.log();
console.log("Test vectors 10 & num2 = 10 ");
console.log(FormattedDivision(10,10));
console.log();