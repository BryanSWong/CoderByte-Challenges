/*
 Developer: Bryan Wong

 Date: 10-16-2014

 Description: Using the JavaScript language, have the function ThirdGreatest(strArr)
 take the array of strings stored in strArr and return the third largest word within
 in. So for example: if strArr is ["hello", "world", "before", "all"] your output
 should be world because "before" is 6 letters long, and "hello" and "world" are both 5,
 but the output should be world because it appeared as the last 5 letter word in the
 array. If strArr was ["hello", "world", "after", "all"] the output should be after
 because the first three words are all 5 letters long, so return the last one. The array
 will have at least three strings and each string will only contain letters.

 Input = ["hello", "world", "before", "all"]    Output = world
 Input = ["hello", "world", "after", "all"]     Output = after
 Input = "coder","byte","code"                  Output = "code"
 Input = "abc","defg","z","hijk"                Output = "abc"

 */

function ThirdGreatest(strArr) {

    strArr.sort(function(a,b){return b.length - a.length});

    var firstGreat = strArr.shift();
    var secondGreat = strArr.shift();
    var thirdGreat = strArr.shift();


    return thirdGreat;

}


vectors = [["hello", "world", "before", "all"], ["hello", "world", "after", "all"], ["coder","byte","code"],
["abc","defg","z","hijk"]];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + ThirdGreatest(vectors[i]));
    console.log();
}