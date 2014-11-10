/*

 Developer: Bryan Wong

 Date: 10-30-2014

 Description: Using the JavaScript language, have the function PalindromeTwo(str) take
 the str parameter being passed and return the string true if the parameter is a palindrome,
 (the string is the same forward as it is backward) otherwise return the string false. The
 parameter entered may have punctuation and symbols but they should not affect whether the
 string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna"
 should return true.

 Input = "Anne, I vote more cars race Rome-to-Vienna"   Output = "true"
 Input = "Noel - sees Leon"                             Output = "true"
 Input = "A war at Tarawa!"                             Output = "true"

 */

function PalindromeTwo(str) {
    // Stores str into myArr while removing the extra items like dashes, ect and making it all lower case
    var myArr = str.replace(/[\W]/g, '').toLowerCase();

    // Reverses the myArr and puts it back together
    var back = myArr.split('').reverse().join('');

    // Compares myArr to back and sees if they are the same backwards and forwards.
    if(back === myArr){
        return true;
    }

    else{
        return false;
    }


}

// test vectors
vectors = ["Anne, I vote more cars race Rome-to-Vienna", "Noel - sees Leon" ,
    "A war at Tarawa!", "testing-for-bugs", "never odd or even"];

for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PalindromeTwo(vectors[i]));
    console.log();
}