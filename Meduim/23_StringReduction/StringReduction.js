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

        // finds matches for ab
        if (str.match(/ab/)) {
            // matches for ab are reduce to 'c' via .replace() method.
            str = str.replace("ab", "c");
        }

        // finds matches for ac
        if (str.match(/ac/)) {
            // matches for ac are reduce to 'b' via .replace() method.
            str = str.replace("ac", "b");
        }

        // finds matches for ba
        if (str.match(/ba/)) {
            // matches for ba are reduce to 'c' via .replace() method.
            str = str.replace("ba", "c");
        }

        // finds matches for bc
        if (str.match(/bc/)) {
            // matches for bc are reduce to 'a' via .replace() method.
            str = str.replace("bc", "a");
        }

        // finds matches for ca
        if (str.match(/ca/)) {
            // matches for ca are reduce to 'b' via .replace() method.
            str = str.replace("ca", "b");
        }

        // finds matches for cb
        if (str.match(/cb/)) {
            // matches for cb are reduce to 'a' via .replace() method.
            str = str.replace("cb", "a");
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