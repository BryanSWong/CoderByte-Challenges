/*
 Developer: Bryan Wong

 Date: 07-02-2014

 Description: Using the JavaScript language, have the function VowelCount(str)
 take the str string parameter being passed and return the number of vowels the
 string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel
 for this challenge.

 Input = "hello"        Output = 2
 Input = "coderbyte"    Output = 3
 */


function VowelCount(str) {

    var myArray = str.split("");
    var count =0;

    for(var i=0; i < str.length; i++){

        if (/[aeiou]/i.test(myArray[i])) { //matches the vowels a, e, i, o, u then increase the count by 1 each time
            count++;
        }

    }


    return count;

}


//test vectors
vectors = ["hello", "coderbyte", "All cows eat grass"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + VowelCount(vectors[i]));
    console.log();
}