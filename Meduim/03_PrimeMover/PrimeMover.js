/*

 Developer: Bryan Wong

 Date: 10-30-2014

 Description: Using the JavaScript language, have the function PrimeMover(num)
 return the numth prime number. The range will be from 1 to 10^4 (10,000). For example:
 if num is 16 the output should be 53 as 53 is the 16th prime number.

the 10,000th prime # is 104729

 Input = 16     Output = 53
 Input = 9      Output = 23
 Input = 100    Output = 541

 */


function PrimeMover(num) {

    var myArr =[];

    // start calculation of prime # starting from 2 to upper range 10^4.
    for (var i = 2; i <= 1000000; i++) {

        var notPrime = false; // sets the var notPrime every loop.

        // compares all the # up to the current # i by dividing  and checking for remainders.
        for (var j = 2; j <= i; j++) {
            if (i%j===0 && j!==i) {
                notPrime = true;
            }
        }

        // all prime # are pushed into the array.
        if (notPrime === false) {
            myArr.push(i);

            // when the target primeth # is met return result.
            if(myArr.length == num){
                return myArr[myArr.length-1];
            }

        }
    }
}

// test vectors
vectors = [16, 9 , 100, 1000, 5000, 10000];

for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PrimeMover(vectors[i]));
    console.log();
}