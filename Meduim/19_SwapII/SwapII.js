/*
 Developer: Bryan Wong

 Date: 3-17-2015

 Description:
 Using the JavaScript language, have the function SwapII(str) take the str parameter
 and swap the case of each character. Then, if a letter is between two numbers (without separation),
 switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output
 should be 4hELLO6 -8wORLD, 7 YES3.

 Input = "Hello -5LOL6"                 Output = "hELLO -6lol5"
 Input =  "2S 6 du5d4e"                 Output = "2s 6 DU4D5E"
 Input =  "6Hello4 -8World, 7 yes3"     Output = "4hELLO6 -8wORLD, 7 YES3"
 Input =                                Output =

 */

function SwapII(str) {

    var output = []; // stores output.

    // checks the letter case and then makes the change from upper to lower as needed.
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === str.charAt(i).toUpperCase()){
            output += str.charAt(i).toLowerCase();
        }
        else if(str.charAt(i) === str.charAt(i).toLowerCase()){
            output += str.charAt(i).toUpperCase();
        }
        // other characters are just added to the output as normal.
        else{
            output += str.charAt(i);
        }
    }

    output = output.toString().split(" "); // breaks output into parts
    var result = [];
    var first = " ";
    var cur = " ";
    var isDigit = false;

    for(var j = 0; j < output.length; j++){

        var now = output[j];

        for(var k = 0; k < now.length; k++){

            if(now.charAt(k).match(/\d{1,}/)  && now.charAt(k+1).match(/\D/) && isDigit == false){

                isDigit = true;
                first = now.charAt(k); //makes  first the first digit found.
                result += now.charAt(k);
            }

            else if(now.charAt(k).match(/\d/) && now.charAt(k-1).match(/\D/) && isDigit == true){

                cur = now.charAt(k);
                var re = new RegExp(first); // regex to find the first digit
                result = result.replace(re, cur); // replace the first digit with the current digit.
                result += first; // add the first digit in place of current digit.

                first = cur; // sets first to current digit in case there are other digits with letters in between.
                isDigit = false;
            }

            else{
                result += now.charAt(k);
            }
        }
        result += " "; // adds the space.
        cur = " "; // resets current.
        first = " "; // resets first.
        isDigit = false; // resets is digit.
    }

    return result;
}

//test vectors
var vectors = ["Hello -5LOL6", "2S 6 du5d4e", "6Hello4 -8World, 7 yes3"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + SwapII(vectors[i]));
    console.log();
}