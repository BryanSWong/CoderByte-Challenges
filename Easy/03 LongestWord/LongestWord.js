/*

 Developer: Bryan Wong

 Date: 06-04-2014

 Description: Using the JavaScript language, have the function LongestWord(sen) take
 the sen parameter being passed and return the largest word in the string. If there are
 two or more words that are the same length, return the first word from the string with
 that length. Ignore punctuation and assume sen will not be empty.

 Input = "fun&!! time"  Output = "time"
 Input = "I love dogs"  Output = "love"
 */


function LongestWord(sen) {

    myArray = sen.split(" "); //makes an array equal to the parts of sen split by the space via parameter (" ")
    var index = 0; //index for myArray
    var long = 0; // another index var for how long is the longest word

    for( var j=0; j < myArray.length; j++){             //for loop to go through the myArray array and find longest word
        var myArray = sen.match(/\w[a-z]{0,}/gi);   //uses the match method to search string for letters only and ignore others
        if (myArray[j].length > long){              //checks the index of the myArray array to see  if the is longer then the long var
            long = myArray[j].length;               //if index is longer then long becomes the index of myArray
            index = j;                              //and the index number is tracked
        }
    }
    sen = myArray[index];                           //makes sure that sen is now equal to the longest word in the myArray

    return sen;

}


//Test vectors

vectors = ["fun&!! time", "I love dogs"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + LongestWord(vectors[i]));
    console.log();
}

