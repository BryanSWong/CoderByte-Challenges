/*
 Developer: Bryan Wong

 Date: 09-30-2014

 Description:

 Using the JavaScript language, have the function CountingMinutesI(str) take the
 str parameter being passed which will be two times (each properly formatted with
 a colon and am or pm) separated by a hyphen and return the total number of
 minutes between the two times. The time will be in a 12 hour clock format.
 For example: if str is 9:00am-10:00am then the output should be 60.
 If str is 1:00pm-11:00am the output should be 1320.

 Input = "9:00am-10:00am"   Output = 60
 Input = "1:00pm-11:00am"   Output = 1320
 Input = "12:30pm-12:00am"  Output = 690
 Input = "1:23am-1:08am"    Output = 1425

 */


function CountingMinutesI(str) {
    var something = "something"
}

//test vectors
vectors = ["9:00am-10:00am", "1:00pm-11:00am", "12:30pm-12:00am", "1:23am-1:08am"  ];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + CountingMinutesI(vectors[i]));
    console.log();
}