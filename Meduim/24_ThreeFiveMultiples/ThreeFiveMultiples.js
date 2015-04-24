/*
 Developer: Bryan Wong

 Date: 3--2015

 Description:
 Using the JavaScript language, have the function ThreeFiveMultiples(num) return the sum of all
 the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5
 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23.
 The integer being passed will be between 1 and 100.

 Input = 10     Output = 23
 Input = 6      Output = 8
 Input = 1      Output = 0
 Input =        Output =

 */

function ThreeFiveMultiples(num){

    var sum = 0; // variable to to hold the sum of all the numbers found.

    // for loop to go through all the numbers below num starting at 1.
    for(var j = 1; j < num; j++){
        // check if number is a multiple of 3 or 5
        if(j % 3 == 0 || j % 5 == 0){

            // add the number to sum for total
            sum += j;
        }
    }

    // return the sum of all the numbers added.
    return sum;
}

//test vectors
var vectors = [10, 6, 1];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + ThreeFiveMultiples(vectors[i]));
    console.log();
}