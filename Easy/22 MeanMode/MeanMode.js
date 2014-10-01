/*
 Developer: Bryan Wong

 Date: 09-13-2014

 Description:
 Using the JavaScript language, have the function MeanMode(arr) take the array
 of numbers stored in arr and return 1 if the mode equals the mean, 0 if they
 don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode
 (3) equals the mean (3)). The array will not be empty, will only contain positive
 integers, and will not contain more than one mode.

 Input = 5, 3, 3, 3, 1  Output = 1
 Input = 1, 2, 3        Output = 0
 Input = 4, 4, 4, 6, 2  Output = 1

 */

function MeanMode(arr) {

    arr.sort(function(a,b){return a- b});
    var mean = arr.reduce(function(a,b){return a+b}) /arr.length; // determines the mean.
    var mode = 0;
    var check =0;
    // finding the mode.
    for(var i = 0; i < arr.length; i++){

        var same = 0;
        for(var k = 0; k < arr.length; k++){

            if(arr[i] == arr[k]){

                same++;
            }
        }
        if(same > check){
            check = same;
            mode = arr[i];
        }

    }

    if(mean == mode){
        return 1;
    }
    else{
        return 0;
    }

}

//test vectors
vectors = [[5, 3, 3, 3, 1], [1,2,3], [4,4,4,6,2]];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + MeanMode(vectors[i]));
    console.log();
}