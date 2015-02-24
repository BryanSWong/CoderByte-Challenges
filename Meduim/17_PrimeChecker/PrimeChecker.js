/*
 Developer: Bryan Wong

 Date: 1-3-2015

 Description:
 Using the JavaScript language, have the function PrimeChecker(num) take num and
 return 1 if any arrangement of num comes out to be a prime number, otherwise return 0.
 For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or
 019, both of which are primes.

 Input = 910    Output = 1
 Input = 98     Output = 1
 Input = 598    Output = 1
 Input =       Output =

 */

function PrimeChecker(num) {

    var test = num.toString().split("");
    var output =[];
    var isPrime = 0;
    var count = 0;


    /*
    for (var j = 0; j < test.length; j++) {

        for (var k = 0; k < test.length; k++) {

            if (test[k + 1] != undefined) {
                output.push(test[k + 1]);
            }

            else {
                output.push(test[0]);
            }
        }

        var check = Math.abs(Number(output.join("")));

        for (var l = 1; l < check - 1; l++) {

            if ((check % l) == 0) {
                count++;
            }
        }
        if (count < 2) {
            isPrime++;
        }
    }
    */

    if(isPrime > 0){
        return 1;
    }

    else{
        return 0;
    }

}

//test vectors
vectors = [910, 98, 598];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PrimeChecker(vectors[i]));
    console.log();
}

