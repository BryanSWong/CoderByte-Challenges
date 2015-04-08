/*
 Developer: Bryan Wong

 Date: 4-8-2015

 Description:
 Using the JavaScript language, have the function TripleDouble(num1,num2) take
 both parameters being passed, and return 1 if there is a straight triple of a number at any
 place in num1 and also a straight double of the same number in num2. For example: if num1
 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter
 you have the straight triple 999 and you have a straight double, 99, of the same number
 in the second parameter. If this isn't the case, return 0.

 Input= num1 = 451999277  num2 = 41177722899    Output = 1
 Input= num1 = 465555  num2 = 5579              Output = 1
 Input= num1 = 67844  num2 = 66237              Output = 0
 Input =                                        Output =

 */

function TripleDouble(num1,num2) {
    /*
    1. loop through first number set and find out if there is a triple set of an number in a row.
    2. loop through the second number set and find out if there is a double set of an number in a row.
    3. if there is a triple set in num 1 and double set in num 2 return 1 else return 0.
     */

}

//test vectors
var vectors = [[ 451999277, 41177722899], [465555, 5579], [67844, 66237] ];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + TripleDouble(vectors[i]));
    console.log();
}
