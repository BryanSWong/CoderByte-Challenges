/*
 Developer: Bryan Wong

 Date: 06--2014

 Description: Using the JavaScript language, have the function ABCheck(str) take the str
 parameter being passed and return the string true if the characters a and b are separated
 by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would
 result in true because there is exactly three characters between a and b). Otherwise
 return the string false.

 Input = "after badly"  Output = "false"
 Input = "Laura sobs"   Output = "true"

 */


function ABCheck(str) {

  var myArray = str.split(""); //breaks down str to parts

    for( var i=0; i < myArray.length; i++) { //loop through myArray


        if (myArray[i] === 'a') { //checks for case of "a" being first
            if (myArray[i + 4] === 'b') { //checks for "b" being at least three characters away
                return true;
            }
        }

        if (myArray[i] === 'b') {  //checks for case of "b" being first
            if (myArray[i + 4] === 'a') { //checks for "a" being at least three characters away
                return true;
            }
        }
    }
        return false;
    }





//test vectors
vectors = ["after badly", "Laura sobs", "lane borrowed"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + ABCheck(vectors[i]));
    console.log();
}