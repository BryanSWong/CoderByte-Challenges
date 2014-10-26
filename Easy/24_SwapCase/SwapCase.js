/*

 Developer: Bryan Wong

 Date: 10-16-2014

 Description: Using the JavaScript language, have the function SwapCase(str) take the str
 parameter and swap the case of each character. For example: if str is "Hello World" the
 output should be hELLO wORLD. Let numbers and symbols stay the way they are.

 Input = "Hello World"  Output = "hELLO wORLD"
 Input = "Hello-LOL"    Output = "hELLO-lol"
 Input = "Sup DUDE!!?"  Output = "sUP dude!!?"

 */

function SwapCase(str) {

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

    return output;

}

//Test vectors

vectors = ["Hello World", "Hello-LOL", "Sup DUDE!!?"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + SwapCase(vectors[i]));
    console.log();
}