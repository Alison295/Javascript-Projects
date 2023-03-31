document.write(typeof "Cat");
document.write("200" + 45);

function Not_a_Number() {
    document.getElementById("test").innerHTML = 0/0; // The result is NaN as 0 can't be divided by 0
}

function Check_a_Number() {
    document.getElementById("test2").innerHTML = isNaN('This is a browser'); //This would display the result “true” because 'This is a string' is not a number

}

function False() {
    document.getElementById("test3").innerHTML = isNaN('1996'); // This would result in “false” because 007 is a number.
}

function Infinity_Number() {
    document.write(4E360); // Print infinity as number is large than 1.79...
}

function Negative_Infinity() {
    document.write(-4E360); // Print -infinity as 
}

function Boolean_True() {
    document.getElementById("boolean").innerHTML = ( 180 < 210);
     // the answer is true because 180 is less than 210
}

function Boolean_False() {
    document.getElementById("boolean2").innerHTML = (80 > 100 );// the answer is false because 80 is not greater than 100
}

function Double_Equal() {
    document.getElementById("douequ").innerHTML = (10 == 10);
    // the result is "true" since the info on the left side of = is equal to info on the right side
}

function Triple_Equal_True() {
    X = 55;
    Y = 55;
    document.getElementById("tritrue").innerHTML = (X === Y); 
    // this is true as the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data 
}
 function Triple_Equal_False() {
    X = 12;
    Y = 'Vet';
    document.getElementById("trifalse").innerHTML = (X === Y);
    //this is false the values are not the same
 }

function AND_Operator() {
    document.getElementById("operator&&").innerHTML = (14 > 7 && 10 > 5);
    // this will display true as both arguments are true
}

function OR_Operator() {
    document.getElementById("operator||").innerHTML = (5 > 2 || 23 > 21);
    // this will display true one argument is true
}

function Not_Operator_True() {
    document.getElementById("operatorNot").innerHTML = !(20 > 30);
    // this will display true because the statement is false using the not operator
}

function Not_Operator_False() {
    document.getElementById("operatorNot2").innerHTML = !(21 > 16);
    // this will display false because the statement is true
}

