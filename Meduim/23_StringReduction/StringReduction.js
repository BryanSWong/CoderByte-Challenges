/*
 Developer: Bryan Wong

 Date: 4-10-2015

 Description:
 Using the JavaScript language, have the function StringReduction(str) take the str parameter
 being passed and return the smallest number you can get through the following reduction method.
 The method is: Only the letters a, b, and c will be given in str and you must take two different
 adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but
 "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be
 further reduced, and the length of the resulting string is to be outputted. For example: if str
 is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction
 is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab"
 reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.

 Input = "cab"      Output = 2
 Input = "bcab"     Output = 1
 Input = "abcabc"   Output = 2
 Input = "cccc"     Output = 4

 */

function StringReduction(str){

    var size = str.length; //use to track how many need changes in loop.

    // goes over str making the needed reduction given in the question
    for(var j = 0; j < size; j++) {

        // matches 'ab' or 'ba' and replaces with 'c'
        if (str.match(/ab|ba/)) {

            str = str.replace( /ab|ba/,"c");
        }

        // matches 'bc' or 'cb' and replaces with 'a'
        if (str.match(/bc|cb/)) {

            str = str.replace(/bc|cb/, "a");
        }

        // matches 'ca' or 'ac' and replaces with 'b'
        if (str.match(/ca|ac/)) {

            str = str.replace(/ca|ac/, "b");
        }
    }

    // returns the final length of str
    return str.length;
}

//test vectors
var vectors = ["cab", "bcab", "abcabc", "cccc"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + StringReduction(vectors[i]));
    console.log();
}