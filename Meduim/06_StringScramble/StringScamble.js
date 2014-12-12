/*

Developer: Bryan Wong

 Date: 11-11-2014

 Description: Using the JavaScript language, have the function StringScramble(str1,str2) take
 both parameters being passed and return the string true if a portion of str1 characters can be
 rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw"
 and str2 is "world" the output should return true. Punctuation and symbols will not be entered
 with the parameters.

 Input = "rkqodlw" & str2= "world"    Output = "true"
 Input = "cdore" & str2= "coder"    Output = "true"
 Input = "h3llko" & str2 = "hello"  Output = "false"

 */


function StringScramble(str1,str2) {

    if(str1.length == str2.length && (str1.split('').sort().join() == str2.split('').sort().join())){
        return console.log(true);
    }

    var test = []; // stores pieces form str1 that match str2
    var test2 = str2.split('').sort();
    var test3 =[]; // stores pieces for extra testing

    for(var i = 0; i < str1.length; i++){

        var copy = '';

        for(var j = 0; j < str2.length; j++){

            if(str1.charAt(i) == str2.charAt(j) && str1.charAt(i) !== copy){

                copy = str1.charAt(i);
                test.push(str1.charAt(i));

            }

        }

        // compares str2 to test
        if(str2.split('').sort().join() == test.sort().join()){
            return console.log(true);
        }


    }

        // Just in case of multiple letters
        while(test.length > 0){

            // checks if there is a match for the first characters
            if(test[0] == test2[0]){

                test3.push(test.shift());
                test2.shift();

            }

            // if it does not match get rid of it
            else{

                test.shift();
            }

        }

    // compares str2 to test3
    if(str2.split('').sort().join() == test3.sort().join()){
        return console.log(true);
    }

    else{
        return console.log(false);
    }

}

console.log("Test vector str1 = rkqodlw and str2 = world");
StringScramble("rkqodlw", "world");
console.log();
console.log("Test vector str1 = cdore and str2 = coder");
StringScramble("cdore", "coder");
console.log();
console.log("Test vector str1 = h3llko and str2 = hello");
StringScramble("h3llko", "hello");
console.log();
console.log("Test vector str1 = copysundialpaper and str2 = copper ");
StringScramble("copysundialpaper", "copper");