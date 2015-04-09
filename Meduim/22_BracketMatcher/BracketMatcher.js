/*
 Developer: Bryan Wong

 Date: 3--2015

 Description:
 Using the JavaScript language, have the function BracketMatcher(str) take the str parameter
 being passed and return 1 if the brackets are correctly matched and each one is accounted for.
 Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but
 if str is "((hello (world))" the the output should be 0 because the brackets do not correctly
 match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

 Input = "(hello (world))"  Output = 1
 Input = "((hello (world))" Output = 0
 Input = "(coder)(byte))"   Output = 0
 Input = "(c(oder)) b(yte)" Output = 1

 */

function BracketMatcher(str){

    return str;

}

//test vectors
var vectors = ["(hello (world))", "((hello (world))", "(coder)(byte))", "(c(oder)) b(yte)"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + BracketMatcher(vectors[i]));
    console.log();
}