/*

 Developer: Bryan Wong

 Date: 09-13-2014

 Description:

 Using the JavaScript language, have the function SecondGreatLow(arr) take the
  array of numbers stored in arr and return the second lowest and second greatest
  numbers, respectively, separated by a space. For example: if arr contains
  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty
  and will contain at least 2 numbers. It can get tricky if there's just
  two numbers!

 Input = 7, 7, 12, 98, 106  Output = "12 98"
 Input = 1, 42, 42, 180     Output = "42 42"
 Input = 4, 90              Output = "90 4"
 Input = 1,2,3,100          Output =  "2 3"

 */

function SecondGreatLow(arr) {
    // sorts the array in case the numbers are not sorted.
    arr.sort(function(a,b){return a-b;});
    var output = ""; // stores second lowest and highest.
    var secondLow = 0; // stores second lowest number.
    var secondHigh = 0;// stores second highest number.

    if(arr.length <= 2){
        secondLow = arr.pop();
        secondHigh = arr.pop();

        output+=(secondLow);
        output+=(" ");
        output+=(secondHigh);

        return output;
    }

    var greatest = arr.pop();
    var lowest = arr.shift();


    for(var i = 0; i < arr.length; i++){

        // finding the second highest element in array
        if(arr[i] < greatest && arr[i] != greatest ){
            secondHigh = arr[i];
        }

    }

    // finding the second lowest element in array
    for(var j = arr.length; j >= 0; j--){

        if(arr[j] > lowest && arr[j] != lowest){
            secondLow = arr[j];
        }
    }

    output+=(secondLow);
    output+=(" ");
    output+=(secondHigh);

    return output;

}

//test vectors
vectors = [[7,7,12,98,106],[1,42,42,180],[4,90],[1,2,3,100]];

for(var j = 0; j < vectors.length; j++) {
    console.log("Test vector: " + vectors[j]);
    console.log("Output: " + SecondGreatLow(vectors[j]));
    console.log();

}