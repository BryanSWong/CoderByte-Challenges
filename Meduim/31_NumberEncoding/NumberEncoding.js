/*
 Developer: Bryan Wong

 Date: 7-2-2015

 Description:
 Using the JavaScript language, have the function NumberEncoding(str) take the str parameter and encode
 the message according to the following rule: encode every letter into its corresponding numbered position
 in the alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!"
 then your program should return 1653 1#!.

 Input = "af5c a#!"     Output = 1653 1#!
 Input = "hello 45"     Output = 85121215 45
 Input = "jaj-a"        Output = 10110-1
 Input =                Output =

 */

function NumberEncoding(str) {

    var arr = str.split('');
    var output = "";

    for(var k = 0; k < str.length; k++){

        var test = str[k].toLowerCase();

        if(/[a-z]/.test(arr[k])){

            output+= AlphaMatch(arr[k]);
        }

        else{
            output += test;
        }

    }

    return output;
}

// function use to match  letter to number
function AlphaMatch(target){

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var number = 0;

    for(var j = 0; j < alphabet.length; j++){

        if(target == alphabet[j]){
            number = j+1; // the plus 1 is for offset of array.
        }
    }

    return number;
}

//test vectors

var vectors = ["af5c a#!", "hello 45", "jaj-a"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + NumberEncoding(vectors[i]));
    console.log();
}
