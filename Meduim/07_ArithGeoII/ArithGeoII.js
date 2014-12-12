/*
    Developer: Bryan Wong

    Date: 11-12-2014

    Description: Using the JavaScript language, have the function ArithGeoII(arr) take
    the array of numbers stored in arr and return the string "Arithmetic" if the sequence
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

function ArithGeoII(arr) {

    var a = arr[1] - arr[0];
    var g = arr[1] / arr[0];
    var aTest = 2;
    var gTest = 2;
    var arith = false;
    var geo = false;

    // Arithmetic test
    while(aTest <= arr.length){

        // if aTest is already equal to end of array
        if(arr[aTest + 1] == null){

            if(arr[arr.length-1] - arr[arr.length-2] == a) {

                arith = true;

                return "Arithmetic";
            }
        }

        // While not end of arr check the next position remains in Arithmetic sequence.
        if((arr[aTest + 1] - arr[aTest]) == a){

            arith = true;
        }

        else{
            arith = false;
            break; // leave Arithmetic test as not Arithmetic.
        }

        aTest++; // update to next position in arr
    }

    // Geometric test
    while(gTest <= arr.length){

        if(arr[gTest + 1] == null){

            if(arr[arr.length-1] / arr[arr.length-2] == g) {

                geo = true;

                return "Geometric";
            }
        }

        // While not end of arr check if the next position remains in Geometric sequence.
        if((arr[gTest + 1] / arr[gTest]) == g){

            geo = true;
        }

        else{
            geo = false;
            break; // leave Geometric test as not geometric.
        }

        gTest++; // update to next position in arr
    }


    return "-1"; // if not Arithmetic or Geometric.
}


//test vectors
vectors = [[2,4,6,8], [2,6,18,54],[5, 10, 15], [2,4,16,24], [3,9,27], [3,9,15,27,81], [3,9,27, 82],
    [4,9,27], [2,4,5,6,8], [2,4,6,9], [1,4,6,8]];


for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + ArithGeoII(vectors[j]));
    console.log();

}