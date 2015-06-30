/*
 Developer: Bryan Wong

 Date: 6-22-2015

 Description:
 Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter being
 passed which will represent a full day and will be filled with events that span from time X to time Y
 in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be
 ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest
 amount of free time available between the start of your first event and the end of your last event in
 the format: hh:mm. The start event should be the earliest event in the day and the latest event should
 be the latest event in the day. The output for the previous input would therefore be 01:30 (with the
 earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will
 contain at least 3 events and the events may be out of order.


 Input =  ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]       Output = "01:30"
 Input =  ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]       Output = "00:30"
 Input =  ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]       Output = "00:04"

 */

function MostFreeTime(strArr) {

    var arrange = SortArr(strArr);
    var mft = 0; // holds the most free time
    var start = 0; // holds the start time
    var end = 0; // holds the end time

    for(var k = 0; k < arrange.length-1; k++){

        var arr = arrange[k].split('-'); // set and split the time set into two parts
        start = arr.pop();

        // look ahead for more input in array
        if(k+1 != null){

            var arr2 = arrange[k+1].split('-');
            end = arr2.shift();
        }

        else{
            // do nothing
        }

        var temp = countMin(start, end); // temp var for determining the most free time

        if(temp > mft){
            mft = temp;
        }
    }

    var hours = Math.floor(mft /60); // get the hours
    var mins = mft%60; // get the minutes

    mft = hours + ":" + mins;

    return mft;
}

// function used to sort strArr
function SortArr(arr){

    var amTime = []; // holds all AM times
    var apTime = []; // holds all AM to PM times
    var pmTime = []; // holds all PM times
    var paTime = []; // holds all PM to AM times

    // loops through strArr to determine where each time set goes
    for(var j = 0; j < arr.length; j++){

        var test = arr[j]; // current time set.

        // checks to see if time set matches for am set
        if(test.match(/\d+:\d+AM-\d+:\d+AM/)){

            amTime.push(test);
        }

        // checks to see if time set matches for am set
        else if(test.match(/\d+:\d+PM-\d+:\d+PM/)){

            pmTime.push(test);
        }

        // checks to see if time set matches for am to pm set
        else if(test.match(/\d+:\d+AM-\d+:\d+PM/)){

            apTime.push(test);
        }

        // otherwise it should be a pm to am set
        else{

            paTime.push(test);
        }
    }

    // sort all time sets
    amTime.sort(function(a,b){return a < b ? 1:-1});
    pmTime.sort(function(a,b){return a < b ? 1:-1});
    apTime.sort(function(a,b){return a < b ? 1:-1});
    paTime.sort(function(a,b){return a < b ? 1:-1});

    var group = [amTime, apTime, pmTime, paTime]; // set up in to a new array

    // combine all the arrays together
    return group.reduce(function(a,b){return a.concat(b)});
}

// function used to count total minutes between two time arguments
function countMin(start, end){

    var first = start.split(':'); //brakes the start in two parts
    var second = end.split(':'); // breaks the end into two parts
    var sHours = Math.abs(first[0].match(/\d+/)); // get the hours for start
    var sMins = Math.abs(first[1].match(/\d+/)); // get the minutes for start
    var eHours = Math.abs(second[0].match(/\d+/)); // get the hour for end
    var eMins = Math.abs(second[1].match(/\d+/)); // get the minutes for end
    var time = 0; // holds the total minutes calculated
    var totalH = 0;

    if(sHours < eHours){

        totalH = eHours - sHours;
    }

    else if(sHours == eHours){
        totalH = 0;
    }

    else{
        totalH = (eHours + 12) - sHours;
    }

   time = (totalH * 60) - sMins + eMins;

    return time;
}

//test vectors
var vectors = [
    ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"],
    ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"],
    ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]
];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + MostFreeTime(vectors[i]));
    console.log();
}