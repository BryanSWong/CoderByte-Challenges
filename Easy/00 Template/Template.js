/*

Developer: <Your name>.

Date: <Date of when the code was completed in mm-dd-yyyy format>

Description: <Copy paste the description from Coderbyte>

 */

function MultipliedBy2(a) {
    return a * 2;
}

//Create test vectors to be executed in the function.
vectors = [4,3];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
   console.log("Test vector: " + vectors[i]);
   console.log("Output: " + MultipliedBy2(vectors[i]));
    console.log();
}
