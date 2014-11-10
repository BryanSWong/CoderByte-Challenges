/*
 Developer: Bryan Wong

 Date: 10-25-2014

 Description: Using the JavaScript language, have the function RunLength(str)
 take the str parameter being passed and return a compressed version of the string
 using the Run-length encoding algorithm. This algorithm works by taking the
 occurrence of each repeating character and outputting that number along with a
 single character of the repeating sequence. For example: "wwwggopp" would return
 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

 Input = "wwwggopp" Output = 3w2g1o2p
 Input = "aabbcde"  Output = "2a2b1c1d1e"
 Input = "wwwbbbw"  Output = "3w3b1w"

 */

function RunLength(str) {

    var arr = str.split("");
    var output = "";
    var count = 0;
    var current = arr[0];

    while(arr[0] != undefined){

        // starts the matching process.
        if(current == arr[0]){
            count++;
        }

        // adds to the output when a mismatch is found.
        if(current != arr[0]){
            output += count;
            output += current;

            count = 1;
            current = arr[0];
        }

        // moves along to the next letter by removing the one not need to be evaluated.
        arr.shift();

        // puts the end part at the end.without this line the last letters and # of letters would not be added
        if(arr[0] == undefined){
            output += count;
            output += current;
        }

    }

    return output;

}

// test vectors
vectors = ["wwwggopp", "aabbcde", "wwwbbbw", "gggggkkkkkkwwwwTTTTTTTTTqop"];

for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + RunLength(vectors[i]));
    console.log();
}