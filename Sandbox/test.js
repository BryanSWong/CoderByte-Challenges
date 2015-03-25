function PrimeChecker(num) {

    var test = num.toString().split("");
    var output =[];
    var isPrime = 0;
    var count = 0;



     for (var j = 0; j < test.length; j++) {

     for (var k = 0; k < test.length; k++) {

     if (test[k + 1] != undefined) {
     output.push(test[k + 1]);
     }

     else {
     output.push(test[0]);
     }
     }

     var check = Math.abs(Number(output.join("")));
         console.log(check);

     for (var l = 1; l < check - 1; l++) {

     if ((check % l) == 0) {
     count++;
     }
     }
     if (count < 2) {
     isPrime++;
     }
     }


    if(isPrime > 0){
        return 1;
    }

    else{
        return 0;
    }

}

//test vectors
vectors = [910, 98, 598];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + PrimeChecker(vectors[i]));
    console.log();
}

