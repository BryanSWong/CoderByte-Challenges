/*
 Developer: Bryan Wong

 Date: 12-10-2014

 Description:

 Using the JavaScript language, have the function CaesarCipher(str,num) take the str
 parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number.
 A Caesar Cipher works by shifting each letter in the string N places down in the alphabet
 (in this case N will be num). Punctuation, spaces, and capitalization should remain intact.
 For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

 Input = "Caesar Cipher" & num = 2  Output = "Ecguct Ekrjgt"
 Input = "Hello" & num = 4          Output = "Lipps"
 Input = "abc" & num = 0            Output = "abc"


 */


function CaesarCipher(str,num) {

    var test = str.split(""); // break down str into parts

    // check each part of the break down for letters
    for(var i = 0; i < str.length; i++){

        // if a letter is found change it to the next letter indicated by the num
      if(/[a-zA-Z]/.test(test[i])){
            test[i] = String.fromCharCode(str.charCodeAt(i) + num);
        }
    }

    str = test.join(""); // puts the test array back together and make str = to it.

    return str;

}

console.log("Test vectors 'Caesar Cipher' & num = 2");
console.log(CaesarCipher('Caesar Cipher',2));
console.log();
console.log("Test vectors 'Hello' & num = 4");
console.log(CaesarCipher("Hello", 4));
console.log();
console.log("Test vectors 'abc' & num = 0");
console.log(CaesarCipher("abc",0));
console.log();
