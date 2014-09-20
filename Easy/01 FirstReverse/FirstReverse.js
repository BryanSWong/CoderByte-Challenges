/*
 Developer: Bryan Wong

 Date: 06-04-2014

 Description: Using the JavaScript language, have the function FirstReverse(str)
 take the str parameter being passed and return the string in reversed order.
 Input = "coderbyte"    Output = "etybredoc"
 Input = "I Love Code"  Output = "edoC evoL I"


 */

function FirstReverse(str) {

    var myArray = []; // creates a array called myArray

    for (var i = str.length - 1, j = 0; i >= 0; i--, j++) //for loop that takes the last letter from str
        myArray[j] = str[i]; //sets myArray index to take on the letter location index of str
    str = myArray.join(''); //sets the str to equal to the myArray array that gets converted to string

    return str;

}


//Test vectors

vectors = ["coderbyte", "I Love Code"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + FirstReverse(vectors[i]));
    console.log();
}