/*

 Developer: Bryan Wong

 Date: 10-16-2014

 Description: Using the JavaScript language, have the function NumberSearch(str) take the
 str parameter, search for all the numbers in the string, add them together, then return
 that final number. For example: if str is "88Hello 3World!" the output should be 91.
 You will have to differentiate between single digit numbers and multiple digit numbers
 like in the example above. So "55Hello" and "5Hello 5" should return two different
 answers. Each string will contain at least one letter or symbol.

 Input = "88Hello 3World!"      Output = 91
 Input = "55Hello"              Output = 55
 Input = "5Hello 5"             Output = 10
 Input = "75Number9"            Output = 84
 Input = "10 2One Number*1*"    Output = 13

 */


function NumberAddition(str) {

    var arr = str.match(/\d+/g);
    var sum =0;

    for(var num in arr)
    sum+= parseInt(arr[num]);

    return sum;

}

//Test vectors

vectors = ["88Hello 3World!", "55Hello", "5Hello 5", "75Number9", "10 2One Number*1*"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + NumberAddition(vectors[i]));
    console.log();
}