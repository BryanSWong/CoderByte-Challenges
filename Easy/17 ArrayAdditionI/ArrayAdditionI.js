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

    arr.sort(function (a, b) {
        return a - b
    });
    //console.log(arr);


    var maxN = arr.pop(); // largest # gets removes from array
    console.log("largest # = "+maxN);

    var index = 0;
    var sum = 0;


    var neg = []; // array for negative #'s


    while (arr[index] < 0) {

        neg.push(arr.shift());

    }

    //console.log(neg);
    //console.log(arr);

    // dealing with positive #s
    for (var i = 0; i < arr.length; i++) { //start of for loop 1
        sum = arr[i];
        //console.log("start sum = " + sum);
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                sum += arr[j];
                //console.log("sum is now = "+ sum);
                if (sum == maxN) {
                    return true;
                }

                else {

                    var diff = sum - maxN;

                    for (var k = 0; k < arr.length; k++) {
                        if (diff == arr[k]) {
                            sum -= arr[k];
                            //console.log("sum after diff is now = " + sum);
                            if (sum == maxN) {
                                return true;
                            }

                        }

                    }

                }

            }

        }

    } // end of for loop 1


    var negDiff = maxN - sum;

    while (neg[index] < negDiff) {
        neg.shift();
    }

    // the need for negative #s
    for(var l = 0; l < neg.length; l++){
        sum+=neg[l];

        if(sum != maxN){
            var diff = sum - maxN;
            for(var m =0; m < arr.length; m++){
                if(diff == arr[m]){
                    sum-=arr[m];
                    if(sum == maxN){
                        return true;
                    }
                }
            }

        }

        else if(sum > maxN){
            negDiff = maxN - sum;
            for(var n = 0; n < neg.length; n++){
                if(negDiff == neg[n]){
                    sum+=neg[n];
                    if(sum == maxN){
                        return true;
                    }
                }
            }
        }

        else {

            if (sum == maxN) {
                return true;
            }
        }

    }

return false;

} // end of program


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