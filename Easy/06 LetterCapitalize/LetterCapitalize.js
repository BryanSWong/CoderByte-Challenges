/*

 Developer: Bryan Wong

 Date: 06-15-2014

 Description: Using the JavaScript language, have the function LetterCapitalize(str)
 take the str parameter being passed and capitalize the first letter of each word.
 Words will be separated by only one space.

 Input = "hello world"  Output = "Hello World"
 Input = "i ran there"  Output = "I Ran There"

 */


function LetterCapitalize(str) {


    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    /*using the return function along with the replace function and a reg expression match case we search for \w which
     which is find a word character, and \S which is find a non-whitespace character, set into a function that takes the
     text at index 0 makes it capital and then takes the substring which is everything else after the index 0 which is
     index 1 by the substring function to lower case.
     */

}


//Test vectors

vectors = ["hello world", "i ran there"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + LetterCapitalize(vectors[i]));
    console.log();
}

