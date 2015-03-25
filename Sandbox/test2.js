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
    var hold = [];
    var output = [];
    var perm;

    // Computes the first part permutation pattern of repeated numbers.
    for(var k = 0; k < start; k++){

        output.push(test.shift());
    }

    //checking thr first part of perm if numbers repeat
    target = output[0];
    count = 0; // resets count
    var repeats = false; // marker for if the front numbers repeat

    for(var l = 0; l < output.length; l++){
        if(output[l] == target){
            count++;
        }

        if(count == output.length){
            repeats = true;
        }
    }

    // Check for repeated numbers in the rest of the number
    target = test[0];
    count = 0; // resets count
    var eRepeats = false; //marker if the rest of the numbers repeat

    for(var m = 0; m < test.length; m++){

        if(target == test[m]){
            count++;
        }

        if(count == test.length){
            eRepeats = true;
        }
    }

    if(repeats == true){

        if(eRepeats == true){
            hold.push(output.pop());

            for(var n =0; n < test.length; n++){
                output.push(test[n]);
                if(repeats == true){
                    output.push(hold.pop());
                    repeats == false;
                }
            }
            console.log("output is now "+ output);

            perm = Number(output.join(""));

            if(perm > num){
                return perm;
            }
            else{
                return -1;
            }
        }

        else{

            for(var o = 0; o < test.length; o++){

                if(test[o+1] != undefined){

                    output.push(test[o+1]);
                }

                else{
                    output.push(test[0]);
                }
            }

            console.log("output is now "+ output);

            perm = Number(output.join(""));

            if(perm > num){
                return perm;
            }
            else{
                return -1;
            }
        }

    }

    else{

        if(eRepeats == true){
            hold.push(output.shift());
            output.push(hold.pop());

            for(var p = 0; p < test.length; p++){
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

        else
        {
            for (var q = 0; q < test.length; q++) {

                if (test[q + 1] != undefined) {

                    output.push(test[q + 1]);
                }

                else {
                    output.push(test[0]);
                }
            }

            console.log("output is now " + output);

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

