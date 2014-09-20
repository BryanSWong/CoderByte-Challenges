/*
 Developer: Bryan Wong

 Date: 06-09-2014

 Description: Using the JavaScript language, have the function LetterChanges(str)
 take the str parameter being passed and modify it using the following algorithm.
 Replace every letter in the string with the letter following it in the alphabet
 (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
 (a, e, i, o, u) and finally return this modified string.

 Input = "hello*3"       Output = "Ifmmp*3"
 Input = "fun times!"    Output = "gvO Ujnft!"

 */

function LetterChanges(str) {

    var myArray = str.split("");

    for(var i=0; i < str.length; i++){ //for loop that checks the character of str at the index of i.

        if (/[a-zA-Z]/.test(myArray[i])) { //for every alphabet that is found perform the function.
            myArray[i] = String.fromCharCode(str.charCodeAt(i) + 1); //sets myArray equal to the conversion of the letter at index i to next letter.

            if (/[aeiou]/.test(myArray[i])) {   //check to see if the index of myArray is a vowel.
                myArray[i] = String.fromCharCode(str.charCodeAt(i) + 1).toUpperCase();  //if index of myArray is a vowel make it capital.
            }
            if(/[z]/.test(str[i])) {//checks for the case of index of myArray is a lowercase 'z'.

                myArray[i] = 'A'; // make index of myArray equal to 'A' because of conditions set in question.
            }

            if(/[Z]/.test(str[i])) {//checks for the case of index of myArray is a uppercase 'Z'.

                myArray[i] = 'A'; // make index of myArray equal to 'A'
            }

        }

    }



    str = myArray.join("");//makes myArray an string property so str can equal it.

    return str;



    /*return str.replace(/[a-zA-Z]/g, function(c){
     return String.fromCharCode(c.charCodeAt(0)+1);
     }).replace(/[aeiou]/g, function(c){
     return c.toUpperCase();
     });
     */
}

//Test vectors

vectors = ["hello*3", "fun times!", "lighting"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + LetterChanges(vectors[i]));
    console.log();
}
