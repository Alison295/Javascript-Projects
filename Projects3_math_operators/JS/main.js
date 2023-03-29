function addition() { // Defining and naming the addition function
    var add = 100+50; 
    document.getElementById("Add").innerHTML = " 100 + 50 = " + add; // Print the result in HTML
}

function subtraction() { // Defining and naming the subtraction function
    var sub = 54-32;
    document.getElementById("Sub").innerHTML = " 54 - 32 = " + sub; // Print the result in HTML
}

function multiplication() { // Defining and naming the multiplication function
    var mlt = 12*5;
    document.getElementById("Mlt").innerHTML = " 12 * 5 = " + mlt; // Print the result in HTML
}

function division() { // Defining and naming the division function
    var div = 60/12;
    document.getElementById("Div").innerHTML = " 60 / 12 = " + div; // Print the result in HTML
}

function multiple() { // Defining and naming the function with multiple math operations
    var multi =  (30 + 20) * 10 / 2;
    document.getElementById("Multi").innerHTML = " (30 + 20) * 10 /2 = " + multi; // Print the result in HTML

}

function modulus() { // Defining and naming the function for calculating the remainder of an operation
    var mod = 25 % 6;
    document.getElementById("Mod").innerHTML = " 35 % 4 = " + mod; // Print the result in HTML

}

function negation() { // Defining and naming the negation operator function
    var negation = 30;
    document.getElementById("Negation").innerHTML = " - " + negation; // Print the result in HTML

}
 
function increment() { // Defining and naming the function for increasing a number to the next stage
    var increment = 43;
    increment++;
    window.alert(increment); // Print the result in HTML
}

function decrement() { // Defining and naming the function for decreasing a number by a stage
    var decrement = 67;
    decrement--;
    window.alert(decrement); // Print the result in HTML

}

function random() { // Defining a function for getting a random number
    window.alert(Math.random() * 100); // Print the result in HTML
}

function math_object() { // Defining a function for rounding a number to the nearest integer
    document.getElementById("Math_Object").innerHTML = Math.round(4,6); // Print the result in HTML
}