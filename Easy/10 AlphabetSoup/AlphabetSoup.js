/*
Developer: Bryan Wong

 Date: 06-20-2014

 Description: Using the JavaScript language, have the function AlphabetSoup(str) take
 the str string parameter being passed and return the string with the letters in
 alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols
 will not be included in the string.

 Input = "coderbyte"    Output = "bcdeeorty"
 Input = "hooplah"      Output = "ahhloop"

 */


function AlphabetSoup(str) {

    var myArray = str.split(""); //makes myArray equally to str in single letters
    myArray.sort(""); //sorts the myArray in alphabetical order.
    str = myArray.join(""); //puts myArray together so it becomes a string again equal to str.


    return str;

}



//test vectors
vectors = ["coderbyte", "hooplah"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + AlphabetSoup(vectors[i]));
    console.log();
}