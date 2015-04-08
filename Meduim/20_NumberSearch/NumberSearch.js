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

function NumberSearch(str) {

    var count = 0; // count for letters.
    var num = []; //holds all the numbers found.

    //Loop through the string and compare each character
    for (var j = 0; j < str.length; j++) {

        //get the current character for comparison.
        var char = str.charAt(j);

        //check if the current character is a number and add to num array if it is.
        if (isNaN(char) == false) {
            num.push(Number(char));
        }

        //check if character is an alphanumeric character and add to the count if it is.
        if (char.match(/[a-zA-Z]/)) {
            count++;
        }
    }

    //add up all the numbers in the array to get the sum.
    var total = num.reduce(function (a, b) {
        return a + b
    });

    //divide the total by the total number of alphanumeric characters and round to the nearest number for result.
    var result = Math.round(total / count);

    // return result.
    return result;
}

//test vectors
var vectors = ["Hello6 9World 2, Nic8e D7ay!", "H3ello9-9", "One Number*1*"];

//Execute the above test vectors.
for (var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + NumberSearch(vectors[i]));
    console.log();
}