/*
 Developer: Bryan Wong

 Date: 3-17-2015

 Description:
 Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-')
 between each two odd numbers and insert asterisks ('*') between each two even numbers in
 str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as
 an odd or even number.

 Input = 4546793    Output = 454*67-9-3
 Input = 99946      Output = 9-9-94*6
 Input = 56647304   Output =  56*6*47-304
 Input =            Output =

 */

function DashInsertII(num) {

    var arr = num.toString().split(""); //brake num into parts for an array.
    var output =[];

    for(var j = 0; j < arr.length; j++){

        // for inserting "*" between even numbers.
        if(arr[j]%2 == 0 && arr[j + 1]%2 == 0 && arr[j] != 0){
            output.push(arr[j]);
            output.push("*");
        }

        // for inserting "-" between odd numbers.
        else if(arr[j]%2 == 1 && arr[j+1]%2 == 1 && arr[j] != 0){
            output.push(arr[j]);
            output.push("-")
        }

        // if there is no need to insert "*" or "-" then add the current number.
        else{
            output.push(arr[j]);
        }
    }

    var result = output.join(""); // combines output for result.

    return result;
}

//test vectors
var vectors = [4546793, 99946, 56647304, 998899889988000];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + DashInsertII(vectors[i]));
    console.log();
}
