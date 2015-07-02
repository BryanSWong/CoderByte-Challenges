/*
 Developer: Bryan Wong

 Date: 7-1-2015

 Description:
 Using the JavaScript language, have the function DistinctList(arr) take the array of numbers stored
 in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3]
 then your program should output 2 because there are two duplicates of one of the elements.

 Input = 0,-2,-2,5,5,5          Output = 3
 Input = 100,2,101,4            Output = 0
 Input = 1, 2, 2, 2, 3          Output = 2

 */

function DistinctList(arr) {

    arr.sort(function(a,b){return a - b;}); // sorts arr if its not sorted already
    var output = 0;
    var count = 0;
    var start = 0; // start value
    var end = arr.length-1; // end point
    var prev = 0; // holds the previous vaule

    while(start <= end){

       var test = arr.shift(); // gets first value to compare

        for(var j = 0; j < arr.length; j++){

            if(test == arr[j]){

                count++;
            }
        }

        // gets rid of copies after being counted.
        for(var k = 0; k < arr.length; k++){
            if(test == arr[k]){
                arr.shift();
            }
        }
        start++; // start counter goes up one.
    }

    output = count; // output is equal to final count of copies.

    return output;
}

//test vectors

var vectors = [[0,-2,-2,5,5,5], [100,2,101,4 ], [1, 2, 2, 2, 3]];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + DistinctList(vectors[i]));
    console.log();
}
