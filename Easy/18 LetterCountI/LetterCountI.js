/*

 Developer: Bryan Wong

 Date: 09-01-2014

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

    var myArray = str.split(" "); // array for storing the words of str
    var count = 0; // start counter

    var greatWord = ""; // index var to return the word with the most characters repeated.

    for(var i = 0; i < myArray.length; i++){

        var word = myArray[i];
        var mostL =0; // tracks total of times a letter repeats

        // start of for loops that check the first letter to the rest of the letters in the word.
        for(var j = 0; j < word.length; j++){

            var lCount = 0; // counts letters that repeat.

            for(var k = 0; k < word.length; k++){

                if(word[j] == word[k]){

                    lCount++;

                    if(lCount == 2){

                        mostL++;

                        if(mostL > count){
                            count = mostL;
                            greatWord = myArray[i];
                        }
                    }
                }
            }
        }
    }

    if(count > 0){

        return greatWord;
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