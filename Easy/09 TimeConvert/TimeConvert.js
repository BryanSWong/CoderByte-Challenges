/*
Developer: Bryan Wong

 Date: 06-20-2014

 Description: Using the JavaScript language, have the function TimeConvert(num) take
 the num parameter being passed and return the number of hours and minutes the parameter
 converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours
 and minutes with a colon.

 Input = 126    Output = "2:6"
 Input = 45     Output = "0:45"

 */


function TimeConvert(num) {

    var hrs = Math.floor(num / 60); //variable hrs divided by 60 then returns the value hrs rounded down
    var min = num % 60;             //variable min is modulus so then returns the remainder as the min value

    return num = hrs + ":" + min; //returns the num equal hrs and a colon and then min
}



//test vectors
vectors = [126, 45];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + TimeConvert(vectors[i]));
    console.log();
}