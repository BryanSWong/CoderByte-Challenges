/*
 Developer: Bryan Wong

 Date: 06-20-2014

 Description: Using the JavaScript language, have the function SimpleSymbols(str) take
 the str parameter being passed and determine if it is an acceptable sequence by either
 returning the string true or false. The str parameter will be composed of + and =
 symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be
 true each letter must be surrounded by a + symbol. So the string to the left would be
 false. The string will not be empty and will have at least one letter.

 Input = "+d+=3=+s+"    Output = "true"
 Input = "f++d+"        Output = "false"

 */

function SimpleSymbols(str) {

    if (str[0] != "+" && str[0] != "=") { // checks  to see if the first index is a + or =
        return false;
    } else if (str[str.length - 1] != "+" && str[str.Length - 1] != "=") { // checks if the end index is a + or =
        return false;
    } else {
        for (var i = 1; i<str.Length - 1; i++) { // loop through str
            if (str[i] != "+" && str[i] != "=") { // checks to see if the index is not + or =
                if (str[i-1] != "+" || str[i+1] != "+") { // checks to see if the index behind the index is not + or = then
                    // checks the index ahead is not + or =
                    return false;
                }
            }
        }
    }
    return str = true;

    // return str;

} //end of function SimpleSymbols


//Test vectors

vectors = ["+d+=3=+s+", "f++d+", "+d===+a+", "2+a+a+",  "==a+"];


for(var i = 0; i < vectors.length; i++) {
    console.log("Test vector: " + vectors[i]);
    console.log("Output: " + SimpleSymbols(vectors[i]));
    console.log();
}