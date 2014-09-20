/*
 Developer: Bryan Wong

 Date: 06-09-2014

 Description: Using the JavaScript language, have the function SimpleAdding(num) add
 up all the numbers from 1 to num. For the test cases, the parameter num will be any
 number from 1 to 1000.

 Input = 12     Output = 78
 Input = 140    Output = 9870

 */


function SimpleAdding(num) {

    var sum = 1; //variable to keep the total of the sum

    for (j = num; j >1; j--){  //for loop to calculate the factorial of num(input)
        sum = sum + j;
        /*
         sum = sum * the current value of num represented by i,
         and continues to recursively add sum total by the next number
         */
    }

    num = sum; //makes sure the return value of num is the output of the sum total

    // code goes here
    return num;

}

//Test vectors

vectors = [12,140];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + SimpleAdding(vectors[i]));
    console.log();
}

