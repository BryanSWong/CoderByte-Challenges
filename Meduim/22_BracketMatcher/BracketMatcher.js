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

    var open = 0; // tracks # of open brackets.
    var closed = 0; // tracks # of closed brackets.

    for(var j = 0; j < str.length; j++){

        // gets the current character to be evaluated.
        var char = str[j];

        // checks for open brackets.
        if(char.match(/[(]/)){
            open++;
        }

        // checks for closed brackets.
        if(char.match(/[)]/)){
            closed++;
        }
    }

    // if open brackets matches closed brackets then return 1.
    if(open == closed){
        return 1;
    }
    //  else return 0.
    else{
        return 0;
    }
}

//test vectors
var vectors = ["(hello (world))", "((hello (world))", "(coder)(byte))", "(c(oder)) b(yte)", "No Brackets gets 1"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + BracketMatcher(vectors[i]));
    console.log();
}