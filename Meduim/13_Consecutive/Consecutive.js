/*
 Developer: Bryan Wong

 Date: 12-10-2014

 Description:
 Using the JavaScript language, have the function Consecutive(arr) take the array
 of integers stored in arr and return the minimum number of integers needed to make the
 contents of arr consecutive from the lowest number to the highest number. For example:
 If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be
 added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8.
 Negative numbers may be entered as parameters and no array will have less than 2 elements.

 Input = 4,8,6      Output = 2
 Input = 5,10,15    Output = 8
 Input = -2,10,4    Output = 10


 */

function Consecutive(arr) {

    arr.sort(function(a,b){ return a-b}); // sorts the array
    var count= 0;

    // Sets the starting cur number and target number for comparison.
    for(var i = 0; i < arr.length; i++) {

        var cur = arr[i];
        var target = arr[i + 1];

        if (target != undefined) {

            // checks the numbers in-between
            for (var k = cur+1; k < target; k++) {
                count++;
            }
        }
    }

    return count;
}

//test vectors
vectors = [[4,8,6],[5,10,15],[-2,10,4],[-5,5,0,15,10]];

for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + Consecutive(vectors[j]));
    console.log();

}
