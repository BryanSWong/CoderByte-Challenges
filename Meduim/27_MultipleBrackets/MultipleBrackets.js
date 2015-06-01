/*
 Developer: Bryan Wong

 Date: 5-28-2015

 Description:
 Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being
 passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for.
 Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 because
 all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])"
 the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]"
 will be used as brackets. If str contains no brackets return 1.

 Input = "(hello [world])(!)"   Output = 1
 Input =  "((hello [world])"    Output = 0
 Input = "(coder)[byte)]"       Output = 0
 Input = "(c([od]er)) b(yt[e])" Output = 1

 */

function MultipleBrackets(str) {

    var open = 0;   // counts open ( or [.
    var closed = 0; // counts closer ) or ].

    for(var j = 0; j < str.length; j++){

        // checks for ( or [ and adds them to open count.
        if(str[j].match(/\(|\[/)){

            open++;
        }

        // checks for ) or ] and adds them to closed count.
        if(str[j].match(/\)|\]/)){

            closed++;
        }
    }

    // return 1 if open and closed match up in count.
    if(open == closed){
        return 1;
    }

    // return 0 other wise.
    else{
        return 0;
    }
}

//test vectors

var vectors = ["(hello [world])(!)", "((hello [world])", "(coder)[byte)]", "(c([od]er)) b(yt[e])"];

//Execute the above test vectors.
for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + MultipleBrackets(vectors[i]));
    console.log();
}
