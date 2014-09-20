/*
 Developer: Bryan Wong

 Date: 06-04-2014

 Description: Using the JavaScript language, have the function FirstFactorial(num)
 take the num parameter being passed and return the factorial of it (ie. if num = 4,
 return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

 Input = 4  Output = 24
 Input = 8  Output = 40320

 */

function FirstFactorial(num) {

    var factorial = 1; //variable to keep the total of the factorial

    for (var j = num; j >1; j--){  //for loop to calculate the factorial of num(input)
        factorial = factorial * j;
        /*
         factorial = factorial * the current value of num represented by i,
         and continues to recursively multiply factorial total by the next factorial
         number
         */
    }

    num = factorial; //makes sure the return value of num is the output of the factorial total

    // code goes here
    return num;

}



//Test vectors

vectors = [4, 8];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + FirstFactorial(vectors[i]));
    console.log();
}

