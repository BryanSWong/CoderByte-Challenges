/*
 Developer: Bryan Wong

 Date: 4-8-2015

 Description:
 Using the JavaScript language, have the function TripleDouble(num1,num2) take
 both parameters being passed, and return 1 if there is a straight triple of a number at any
 place in num1 and also a straight double of the same number in num2. For example: if num1
 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter
 you have the straight triple 999 and you have a straight double, 99, of the same number
 in the second parameter. If this isn't the case, return 0.

 Input= num1 = 451999277  num2 = 41177722899    Output = 1
 Input= num1 = 465555  num2 = 5579              Output = 1
 Input= num1 = 67844  num2 = 66237              Output = 0
 Input =                                        Output =

 */

function TripleDouble(num1,num2) {

    var triple = false; // condition flag for triple digits found.
    var double = false; // condition flag for double digits found.
    var part1 = num1.toString(); //converts num1 to string.
    var part2 = num2.toString(); // converts num2 to string.
    var tripleNum = ""; //records the number that is a triple found.

    //loops through num1 to find triple digits in a row.
    for(var j = 0; j < part1.length; j++){

        var num = part1[j]; //holds what is the first number to check.
        //check if the the next two numbers are the same.
        if(num == part1[j+1] && num == part1[j+2]){
            triple = true; // change to true when triple number is found.
            tripleNum = num; // sets the number to find a double of.
        }
    }

    // if no triple was found we can return 0 as first part of conditions were not met.
    if(triple == false){

        return 0;
    }

    // checking num2 to see if there is a double of the triple found.
    for(var k = 0; k < part2.length; k++){

        var num3 = part2[k]; //holds the number to check.

        // if number is equal to the triple digit and checks if the next number is the same.
        if(num3 == tripleNum && num3 == part2[k+1]){

            double = true; // makes double true.
        }
    }

    // if triple was found and double was found.
    if(triple == double ){

        return 1;
    }

    // if a double was not found then.
    else {
        return 0;
    }
}

//test vectors
console.log("Test vectors: num1 = 451999277 num2 = 41177722899");
console.log(TripleDouble(451999277, 41177722899));
console.log();
console.log("Test vectors: num1 = 465555 num2 = 5579");
console.log(TripleDouble(465555, 5579));
console.log();
console.log("Test vectors: num1 = 67844 num2 = 66237");
console.log(TripleDouble(67844, 66237));
console.log();
