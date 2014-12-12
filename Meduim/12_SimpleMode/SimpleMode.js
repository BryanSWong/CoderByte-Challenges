/*
 Developer: Bryan Wong

 Date: 12-10-2014

 Description:

 Using the JavaScript language, have the function SimpleMode(arr) take the array of
 numbers stored in arr and return the number that appears most frequently (the mode). For example:
 if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the
 one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first).
 If there is no mode return -1. The array will not be empty.

 Input = 10,4,5,2,4 Output = 4
 Input = 5,10,10,6,5  Output = 5
 Input = 5,5,2,2,1  Output = 5
 Input = 3,4,1,6,10 Output = -1

 */


function SimpleMode(arr) {

    var mode = 0; // stores the mode.
    var check =0; // used to find same numbers.
    var firstM = false; // use to ensure first mode found.

    // finding the mode.
    for(var i = 0; i < arr.length; i++){

        var same = 0;

        for(var k = 0; k < arr.length; k++){

            if(arr[i] == arr[k] && i != k){

                same++;
            }
        }
        if(same > check){
            check = same;

            if(firstM == false)
            mode = arr[i];
            firstM = true;
        }

    }

    if(mode != 0){

        return mode;
    }

    else{
        return -1;
    }


}

//test vectors
vectors = [[10,4,5,2,4],[5,10,10,6,5],[5,5,2,2,1],[3,4,1,6,10],[1,3,2,1,2,2,3,4,5,5,5,5]];

for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + SimpleMode(vectors[j]));
    console.log();

}