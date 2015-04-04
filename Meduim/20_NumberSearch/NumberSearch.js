/*
Developer: Bryan Wong

Date: 3--2015

Description:
Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for
all the numbers in the string, add them together, then return that final number divided by the total amount of
letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if
you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string.
32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2.
Only single digit numbers separated by spaces will be used throughout the whole string (So this won't
ever be the case: hello44444 world). Each string will also have at least one letter.

 Input =    "Hello6 9World 2, Nic8e D7ay!"  Output =    2
 Input =    "H3ello9-9"                     Output =    4
 Input =    "One Number*1*"                 Output =    0
 Input =                                    Output =

*/


function NumberSearch(str){
/*
    1.search the string for all the numbers that are separate and not together.
    2.count all the alpha characters in the string.
    3 add up all the numbers found and divide by the number of letters.
    4 return the result of the division and round to nearest whole number.
    */

    var count; // count for letters.
    var num = []; //holds all the numbers found.

    for(var j = 0; j < str.length; j++){

        if(str.charAt(j)){

        }
    }



}

//test vectors
var vectors = ["Hello6 9World 2, Nic8e D7ay!", "H3ello9-9", "One Number*1*"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + NumberSearch(vectors[i]));
    console.log();
}