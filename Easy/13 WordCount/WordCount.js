/*

 Developer: Bryan Wong

 Date: 07-02-2014

 Description: Using the JavaScript language, have the function WordCount(str)
 take the str string parameter being passed and return the number of words the
 string contains (ie. "Never eat shredded wheat" would return 4). Words will be
 separated by single spaces.

 Input = "Hello World"Output = 2
 Input = "one 22 three"Output = 3

 */


function WordCount(str) {
    var count = 0;
    var myArray = str.split(" "); //breaks str into parts by spaces into full words

    for(var i = 0; i<myArray.length; i++){
        count++;
    }

    return count;

}


//test vectors
vectors = ["Hello World", "one 22 three", "Never eat shredded wheat"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + WordCount(vectors[i]));
    console.log();
}