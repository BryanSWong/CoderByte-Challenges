/*

 Developer: Bryan Wong

 Date: 07-06-2014

 Description: Using the JavaScript language, have the function ArrayAdditionI(arr)
 take the array of numbers stored in arr and return the string true if any combination
  of numbers in the array can be added up to equal the largest number in the array,
  otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3]
  the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty,
  will not contain all the same elements, and may contain negative numbers.


 Input = 4,6,23,10,1,3      Output = "true"
 Input = 5,7,16,1,2         Output = "false"
 Input = 3,5,-1,8,12        Output = "true"


 */

function ArrayAdditionI(arr) {

    arr.sort(function (a, b) { return a - b});

    var target = arr.pop(); // largest # gets removes from array
    var neg = []; // holds all the negitive numbers
    var sum = 0; // holds the sum of the numbers

    while(arr[0] < 0){

        neg.push(arr.shift());
    }

    // first round of summing the numbers
    for(var i =0;  i < arr.length; i++) {

        sum = arr[i];

        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                sum += arr[j];

                if (sum == target) {
                    return true;
                }

                // if sum is greater then target find if difference is in array and remove it.
                if(sum > target) {
                    var diff = sum - target;

                    for (var k = 0; k < arr.length; k++) {
                        if (diff == arr[k]) {
                            sum -= arr[k];

                            if (sum == target) {
                                return true;
                            }

                        }

                    }
                }

            }

        }
    }

    // if target is not reachable with only positive numbers use the negative numbers.
    // first get rid of un-needed negative numbers if possible.

    var negDiff = target - sum;

    while (neg[0] < negDiff) {
        neg.shift();
    }

    //add negative numbers
    for(var l = 0; l < neg.length; l++){
        sum+=neg[l];

        if(sum != target){
            var diff = sum - target;
            for(var m =0; m < arr.length; m++){
                if(diff == arr[m]){
                    sum-=arr[m];
                    if(sum == target){
                        return true;
                    }
                }
            }

        }

        else if(sum > target){
            negDiff = target - sum;
            for(var n = 0; n < neg.length; n++){
                if(negDiff == neg[n]){
                    sum+=neg[n];
                    if(sum == target){
                        return true;
                    }
                }
            }
        }

        else {

            if (sum == target) {
                return true;
            }
        }

    }


    // return false if unable to combine numbers given to equal largest value.
    return false;
}


//test vectors
vectors = [[4,6,23,10,1,3], [5,7,16,1,2], [3,5,-1,8,12], [-27,20,7,3,10], [1,2],
    [1,24,2,23,3,22,4,21,5,20,6,19,7,18,9,16,10,15,11,14,12,13,100,-17,-1,-3,-4],
    [-1,-6,-9,-12,6,0,12,8,4,-2], [100,-2,-3, 30, 75,-20, -14],
    [-100, -80, -1, -2, -3, -4, 23, 45, 67, 99, 224], [-1, -20, -4 ,-2,-3, -99]
];


for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + ArrayAdditionI(vectors[j]));
    console.log();

}