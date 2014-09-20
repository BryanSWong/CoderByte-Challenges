/*

 Developer: Bryan Wong

 Date: 07-02-2014

 Description: Using the JavaScript language, have the function Palindrome(str)
 take the str parameter being passed and return the string true if the parameter
 is a palindrome, (the string is the same forward as it is backward) otherwise return
 the string false. For example: "racecar" is also "racecar" backwards. Punctuation and
 numbers will not be part of the string.

 Input = "never odd or even"    Output = "true"
 Input = "eye"                  Output = "true"

 */



function Palindrome(str) {

    var myArray = str.replace(/[\s]/g, '');

    var back = myArray.split('').reverse().join('');

    if(back === myArray){
        return true;
    }

    else{
        return false;
    }


}


//test vectors
vectors = ["never odd or even", "eye", "testing for bugs", "racecar"];


for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + Palindrome(vectors[j]));
    console.log();
}