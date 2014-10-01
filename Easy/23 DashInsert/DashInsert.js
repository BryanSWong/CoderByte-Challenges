/*
 Developer: Bryan Wong

 Date: 09-13-2014

 Description:
 Using the JavaScript language, have the function DashInsert(num) insert dashes
 ('-') between each two odd numbers in num. For example: if num is 454793 the
 output should be 4547-9-3. Don't count zero as an odd number.


 Input = 454793 Output = "4547-9-3"
 Input = 99946  Output = "9-9-946"
 Input = 56730  Output = "567-30"

 */

function DashInsert(num) {

    var output = "";
    var convert= num.toString();

    for(var i = 0; i < convert.length; i++){

        if((convert[i] %2) != 0 && (convert[i+1]%2) != 0 && convert[i+1] != null || 0){
            output += convert[i];
            output += "-";
        }

        else{
            output += convert[i];
        }

    }

    return output;

}
//test vectors
vectors = [454793, 99946, 56730 ];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + DashInsert(vectors[i]));
    console.log();
}
