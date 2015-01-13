/*
Developer: Bryan Wong

 Date: 1-1-2015

 Description:
 Using the JavaScript language, have the function PermutationStep(num) take the num parameter
 being passed and return the next number greater than num using the same digits.
 For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater
 permutations, return -1 (ie. 999).

 Input = 123        Output = 132
 Input = 12453      Output = 12534
 Input = 11121      Output = 11211
 Input = 41352      Output = 41523

 */

function PermutationStep(num) {

    // checking if all the numbers are same.
    var test = num.toString().split("");
    var count = 0;
    var target = test[0];

    for(var j = 0; j < test.length; j++){

        if(target == test[j]){
            count++;
        }

        if(count == test.length){
            return -1;
        }
    }

    // If numbers are not the same.
    // Following the permutation pattern and check if result is greater then original.
    var start = Math.floor((num.toString().length) / 2);
    var size = num.toString().length;
    var hold = 0;
    var output = [];

    // Computes the first part permutation pattern repeated numbers.
    for(var k = 0; k < start; k++){

        output.push(test[k]);
    }

    // Check for repeated numbers in the rest of the number
    var check = test[start];
    count = 0; // resets count
    for(var m = start; m < test.length; m++){

        if(check == test[m]){
            count++;
        }

        if(count == test.length-start){
            return -1;
        }
    }

    // Continue to compute the second part of the permutation pattern swapping with the number to the right.
    for(var l = start; l < test.length; l++){

        if(test[l+1] != undefined){

            output.push(test[l+1]);
        }

        else{
            output.push(test[start]);
        }

    }

    var perm = Number(output.join(""));

    if(perm > num){
        return perm;
    }

}

//test vectors
vectors = [123, 12453, 11121, 41352, 9999999, 12999, 3245678];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PermutationStep(vectors[i]));
    console.log();
}

