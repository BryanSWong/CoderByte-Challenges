/*

 Developer: Bryan Wong

 Date: 07-09-2014

 Description: Using the JavaScript language, have the function ArithGeo(arr) take the
  array of numbers stored in arr and return the string "Arithmetic" if the sequence
  follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
  If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one
  where the difference between each of the numbers is consistent, where as in a geometric
  sequence, each term after the first is multiplied by some constant or common ratio.
  Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers
  may be entered as parameters, 0 will not be entered, and no array will contain all the
  same elements.

 Input = 2, 4, 6, 8     Output = "Arithmetic"
 Input = 2, 6, 18, 54   Output = "Geometric"
 Input = 5,10,15        Output = "Arithmetic"
 Input = 2,4,16,24      Output = -1

 */


function ArithGeo(arr) {


    if(arr.length < 3){

        return "Array too small to compute.";

    }

    var a = arr[1] - arr[0]; // for arithmetic comparison and shows common difference
    var g = arr[1] / arr[0];// for geometric comparison and shows common ratio

    if (a == (arr[arr.length - 1] - arr[arr.length - 2])) { //check last 2 elements to common difference
        return "Arithmetic";
    }

    else if (g == (arr[arr.length - 1] / arr[arr.length - 2])) { //check last 2 elements to common ratio
        return "Geometric";

    }

    else {


        return "-1";
    }
}

//test vectors
vectors = [[2,4,6,8], [2,6,8,18,54],[5, 10, 15], [2,4,16,24], [2,2], [1]];


for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + ArithGeo(vectors[j]));
    console.log();

}