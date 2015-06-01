/*
 Developer: Bryan Wong

 Date: 5-26-2015

 Description:
 Using the JavaScript language, have the function FibonacciChecker(num) return the string yes if
 the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2,
 which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1,
 then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

 Input = 34     Output = "yes"
 Input = 54     Output = "no"
 Input =        Output =
 */

function FibonacciChecker(num) {

    var arr = [0, 1, 1, 2, 3, 5]; // starting array of numbers given.
    var fib = 0; // place holder for next Fibonacci sequence.
    var answer = ""; // place holder to what the answer will be set to later.

    // a for loop to generate the next Fibonacci number in the sequence
    for(var j = 0; j < num; j++){

        // next Fibonacci number
        fib = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(fib); // adds the Fibonacci number to the array

        // if the Fibonacci number is greater then target number answer "no".
        if (fib > num){
            answer = "no";
                break;
        }

        // if Fibonacci number is equal to target num answer "yes"
        if(fib == num){
            answer = "yes";
            break;
        }

    }

    // return answer found
    return answer;
}

//test vectors

 var vectors = [34, 54];

 //Execute the above test vectors.
 for(var i = 0; i < vectors.length; i++) {
 console.log("Test vector: " + vectors[i]);
 console.log("Output: " + FibonacciChecker(vectors[i]));
 console.log();
 }