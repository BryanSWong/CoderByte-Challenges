/*
 Developer: Bryan Wong

 Date: 10-25-2014

 Description:
 Using the JavaScript language, have the function PrimeTime(num) take the
 num parameter being passed and return the string true if the parameter is a
 prime number, otherwise return the string false. The range will be between 1 and 2^16 (65536).

 Input = 19     Output = true
 Input = 110    Output = false

 high prime numbers for testing:
 727, 733, 739, 743, 751, 757, 761, 769, 773, 787,797, 809, 811,
 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887,
 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997

 */


function PrimeTime(num) {

    var count = 0;
    var divisor = 1; // starts at 1 because 0 is not counted

    // checks the num for prime by checking against all possible divisors from 1 to num.
    while(divisor <= num){
        if(num%divisor == 0){
            count++;
        }

        divisor++;
    }

    // prime numbers are numbers that are divisible by 1 and itself so any others divisors will make it not prime.
    if(count > 2){
        return false;

    }
    else{
        return true;
    }

}

// test vectors
vectors = [19,110,65536,9, 15, 107, 109, 113];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PrimeTime(vectors[i]));
    console.log();
}