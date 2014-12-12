/*

Developer: Bryan Wong

Date: 12-08-2014

Description:

Using the JavaScript language, have the function LetterCountI(str) take
the str parameter being passed and return the first word with the greatest number of
repeated letters. For example: "Today, is the greatest day ever!" should return greatest
because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
are no words with repeating letters return -1. Words will be separated by spaces.

Input = "Today, is the greatest day ever!"     Output = "greatest"
Input = "Hello apple pie"                      Output = "Hello"
Input = "No words"                             Output = -1


*/

function LetterCountI(str) {

    var test = str.split(" ");
    var count = 0;
    var target = ""; // holds the word with the most letters repeated.
    //console.log(test);

    for(var i = 0; i < test.length; i++){
        var word = test[i];
        var trackL = 0; // tracks # of letters repeated.

        // check the first letter to the rest of the letters in the word.
        for(var j = 0; j < word.length; j++){

            var lCount = 0; // tracks a repeat letter

            for(var k = 0; k < word.length; k++){

                if(word[j] == word[k]){
                    lCount++;

                    if(lCount == 2){
                        trackL++;

                        if(trackL > count){

                            count = trackL;
                            target = test[i];
                        }
                    }
                }

            }
        }
    }

    if(count > 0){
        return target;
    }

    else{
        return -1;
    }


}


//test vectors
vectors = ["Today, is the greatest day ever!", "Hello apple pie", "No words"];

for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + LetterCountI(vectors[j]));
    console.log();

}