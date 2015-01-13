/*

 Developer: Bryan Wong

 Date: 12-10-2014

 Description:
 Using the JavaScript language, have the function CountingMinutes(str) take the str
 parameter being passed which will be two times (each properly formatted with a colon
 and am or pm) separated by a hyphen and return the total number of minutes between
 the two times. The time will be in a 12 hour clock format. For example: if str is
 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output
 should be 1320.

 Input = "9:00am-10:00am"   Output = 60
 Input = "1:00pm-11:00am"   Output = 1320
 Input = "12:30pm-12:00am"  Output = 690
 Input = "1:23am-1:08am"    Output = 1425

 */


function CountingMinutes(str) {

    var arr = str.split("-");
    var start = arr.shift();
    var end = arr.shift();
    var startHours = 0;
    var endHours = 0;
    var startMinutes = Number(start.match(/[0-5]+[0-9](?=a|p)/));
    var endMinutes = Number(end.match(/[0-5]+[0-9](?=a|p)/));
    var totalHours =0;
    var startAMCheck = false;
    var endAMCheck = false;

    // find the start hours
    if(start.match(/^[1]+[0-9]/) != null){
        startHours = Number(start.match(/^[1]+[0-9]/));

    }
    else{
        startHours = Number(start.match(/^[1-9]/));
    }

    // check if am for start
    if(start.match(/am$/) != null){
        startAMCheck = true;
    }

    // find the end hours
    if(end.match(/^[1]+[0-9]/) != null){
        endHours = Number(end.match(/^[1]+[0-9]/));
    }
    else{
        endHours = Number(end.match(/[1-9]/));
    }

    // check if end hours is am or not
    if(end.match(/am$/) != null){
        endAMCheck = true;
    }

    // Calculate the total hours
    // First check if the start and end are in the same am or pm or if they are opposite of each other,
    // then set hours accordingly.

    if(startAMCheck == endAMCheck){
        totalHours = endHours - startHours
    }
    else{
        totalHours = (endHours + 12) - startHours;
    }

    // if the start and end time are the same and the am and pm are as well set for a whole day.
    if(startHours == endHours && startAMCheck == endAMCheck){
        totalHours = 24;
    }

    // the last check just in case the whole day has not passed but comes close.
    if(startHours > endHours && startAMCheck == endAMCheck){
        totalHours = (endHours + 24) - startHours;
    }

    // Calculate the total minutes.
    return (totalHours * 60) - startMinutes + endMinutes;

}


//test vectors
vectors = ["9:00am-10:00am", "1:00pm-11:00am", "12:30pm-12:00am", "1:23am-1:08am", "9:00am-8:59am", "9:00am-9:00am"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + CountingMinutes(vectors[i]));
    console.log();
}


