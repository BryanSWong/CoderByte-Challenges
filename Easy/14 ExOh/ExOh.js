/*

 Developer: Bryan Wong

 Date: 07-02-2014

 Description: Using the JavaScript language, have the function ExOh(str) take
 the str parameter being passed and return the string true if there is an equal
 number of x's and o's, otherwise return the string false. Only these two letters
 will be entered in the string, no punctuation or numbers. For example: if str is
 "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

 Input = "xooxxo"   Output = "true"
 Input = "x"        Output = "false"



 */


function ExOh(str) {

    var myArray = str.split("");
    var xCount = 0;
    var oCount = 0;

    for(var i = 0; i < myArray.length; i++){

        if (/[x]/i.test(myArray[i])) { // match case of 'x' increase count by 1 each time
            xCount++;
        }

        if (/[o]/i.test(myArray[i])) { // match case of 'o' increase count by 1 each time
            oCount++;
        }

    }

    if (xCount == oCount){
        return true;
    }
    else {

        return false;
    }

}


//test vectors
vectors = ["xooxxo", "x", "xxxoxoxoxoxoxoxox", "o"];


for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + ExOh(vectors[j]));
    console.log();
}