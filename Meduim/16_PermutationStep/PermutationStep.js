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

    for (var j = 0; j < test.length; j++) {

        if (target == test[j]) {
            count++;
        }

        if (count == test.length) {
            return -1;
        }
    }

    // If numbers are not the same.
    // Following the permutation pattern and check if result is greater then original.
    var start = Math.floor((num.toString().length) / 2);
    var hold = [];
    var output = [];
    var perm;

    // Computes the first part permutation pattern of repeated numbers.
    for (var k = 0; k < start; k++) {

        output.push(test.shift());
    }

    //checking thr first part of perm if numbers repeat
    target = output[0];
    count = 0; // resets count
    var repeats = false; // marker for if the front numbers repeat

    for (var l = 0; l < output.length; l++) {
        if (output[l] == target) {
            count++;
        }

        if (count == output.length) {
            repeats = true;
        }
    }

    // Check for repeated numbers in the rest of the number
    target = test[0];
    count = 0; // resets count
    var eRepeats = false; //marker if the rest of the numbers repeat

    for (var m = 0; m < test.length; m++) {

        if (target == test[m]) {
            count++;
        }

        if (count == test.length) {
            eRepeats = true;
        }
    }
    // if first part repeats
    if (repeats == true) {
        // if second part repeats as well then switch the numbers around
        if (eRepeats == true) {
            hold.push(output.pop());

            for (var n = 0; n < test.length; n++) {
                output.push(test[n]);
                if (repeats == true) {
                    output.push(hold.pop());
                    repeats == false;
                }
            }

            perm = Number(output.join(""));

            if (perm > num) {
                return perm;
            }
            else {
                return -1;
            }
        }
        // if the second part does not then just continue the permutation
        else {

            for (var o = 0; o < test.length; o++) {

                if (test[o + 1] != undefined) {

                    output.push(test[o + 1]);
                }

                else {
                    output.push(test[0]);
                }
            }

            perm = Number(output.join(""));

            if (perm > num) {
                return perm;
            }
            else {
                return -1;
            }
        }

    }
    //if the first part does not have repeated numbers
    else {
         // but the second part has repeated numbers then switch the numbers for the first part
        if (eRepeats == true) {
            hold.push(output.shift());
            output.push(hold.pop());

            for (var p = 0; p < test.length; p++) {
                output.push(test[p]);
            }

            perm = Number(output.join(""));

            if (perm > num) {
                return perm;
            }
            else {
                return -1;
            }
        }
        // if there is no repeating numbers then continue with permutation
        else {
            for (var q = 0; q < test.length; q++) {

                if (test[q + 1] != undefined) {

                    output.push(test[q + 1]);
                }

                else {
                    output.push(test[0]);
                }
            }

            perm = Number(output.join(""));

            if (perm > num) {
                return perm;
            }
            else {
                return -1;
            }
        }
    }

}

//test vectors
vectors = [123, 12453, 11121, 41352, 9999999, 12999, 3245678, 22777, 777222];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PermutationStep(vectors[i]));
    console.log();
}
