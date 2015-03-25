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
 Input =        Output =

 */

function PrimeChecker(num) {

    var arr = num.toString().split(""); // change to string and breaks it into parts in an array.
    var count = 0;
    var end = arr.length-1;
    var output = [];

    //Start with getting the first number in the order
    for (var j = 0; j < arr.length; j++) {

        output.push(arr[j]);

        //add the rest of the numbers to compute.
        for (var k = 0; k < arr.length; k++) {

            if (j != k) {

                output.push(arr[k]);
            }
        }

        var test = Number(output.join("")); //converts and holds the number order to be evaluated.

        while (count < end) {

            var primeTest = primeTime(Number(test));

            if(primeTest == true){

                return 1;
            }

            else{

                if(output.length < 3){

                }

                else{

                    test = arrange(output);
                }
            }
            output = test.toString().split("");
            count++;
        }

        output = []; //resets output
        count = 0; // resets count.
    }

    return 0; // if no prime number in any order found.
}

function arrange(input){

    var first = 1;
    var arr = [];
    var hold =[];
    arr.push(input[0]);

    for(var k = first; k < input.length; k++){

        if(input[k+1] != undefined){
            arr.push(input[k+1]);
        }

        else{
            arr.push(input[first]);
        }
    }

    var num = Number(arr.join(""));

    return num;
}

function primeTime(num){

    //Number(target);

    var count = 0;
    var divisor = 1;

    while(divisor <= num){
        if(num%divisor == 0){
            count++;
        }

        divisor++;
    }

    if(count > 2){
        return false;

    }
    else{
        return true;
    }

}

//test vectors
var vectors = [910, 98, 598, 210, 1234, 222, 12345];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PrimeChecker(vectors[i]));
    console.log();
}

