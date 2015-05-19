/*
 Developer: Bryan Wong

 Date: 3--2015

 Description:
 Using the JavaScript language, have the function CoinDeterminer(num) take the input, which will be
 an integer ranging from 1 to 250, and return an integer output that will specify the least number of
 coins, that when added, equal the input integer. Coins are based on a system as follows: there are
 coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output
 should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the
 output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.

 Input =  16      Output = 2
 Input =  25      Output = 3
 Input =  6       Output = 2
 Input =        Output =
 */

function CoinDeterminer(num){

    var coins = [1, 5, 7, 9, 11]; // array to represent the coins
    var sum = 0; // var to hold the sum for all coin additions
    var n = coins.length-1; // start point for coin to be used.
    var count = 0;  // used to track amount of coins used
    var lowest = 0; //used for the final lowest coins to get to the target number.

    // the first loop starts off with the highest coin value and a coin count.
    for(var j = coins.length-1; j > 0; j--){

         sum = coins[j]; // starting sum.
         count++; // first coin.

        // this loop goes through the coins add and subtracting as needed.
        for(var k = 0; k < num; k++){

            sum += coins[n]; // add coin starting with highest.
            count++; // add a coin count.


            // if coin added goes pass the target num.
            if(sum > num){

                sum -= coins[n]; //subtract last coin value.
                count--; // subtract coin.
                n--; // lower coin value to next value.
            }

            // when the sum is equal to num
            if(sum == num){
                if(lowest == 0){
                    lowest = count;
                }
                else{
                    if(count < lowest){
                        lowest = count;
                    }
                }
                // leave this for loop
                break;
            }
        }

        n = coins.length-1; // resets n
        sum = 0; // resets sum
        count = 0; // resets count

    }

    return lowest; //returns the lowest number of coins used
}

//test vectors
var vectors = [16, 25, 6];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + CoinDeterminer(vectors[i]));
    console.log();
}