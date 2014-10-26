/*
 Developer: Bryan Wong

 Date: 10-16-2014

 Description: Using the JavaScript language, have the function PowersofTwo(num) take
 the num parameter being passed which will be an integer and return the string true
 if it's a power of two. If it's not return the string false. For example if the input
 is 16 then your program should return the string true but if the input is 22 then the
 output should be the string false.

 Input = 16     Output = "true"
 Input = 22     Output = "false"
 Input = 4      Output = "true"
 Input = 124    Output = "false"


 */

function PowersOfTwo(num) {

    var base = 2;       // start base
    var exponent = 0;   // start exponent
    var result = 0;     // start result

    // check for power of 2
    while(result < num){

        result = Math.pow(base, exponent);

        exponent++;

        // if a power of two
        if(result == num){
            return true;
        }

        // if not a power of two
        if(result > num){
            return false;
        }
    }
}

// test vectors
vectors = [16, 22, 4, 124];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PowersOfTwo(vectors[i]));
    console.log();
}

