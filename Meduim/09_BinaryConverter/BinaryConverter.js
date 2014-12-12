/*

 Developer: Bryan Wong

 Date: 12-08-2014

 Description: Using the JavaScript language, have the function BinaryConverter(str)
 return the decimal form of the binary value. For example: if 101 is passed
 return 5, or if 1000 is passed return 8.

 Input = "101"      Output = "5"
 Input = "100101"   Output = "37"
 Input = "011"      Output = "3"


 */


function BinaryConverter(str) {

    var sum = 0;
    var binary = 1;

    for(var i = str.length-1; i >= 0; i--){

        if(str.charAt(i) == "1"){

            sum += binary;
        }

        binary = binary * 2;
    }

    return sum;



}

//test vectors
vectors = ["101", "100101", "011", "1101010110" ];

for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + BinaryConverter(vectors[j]));
    console.log();

}