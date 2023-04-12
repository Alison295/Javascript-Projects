// A function using a while loop
function Call_Loop() {
    var Digit = ""
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// A function to get the length property
function Length_Property() {
    var line = "All we have to do is decide what to do with the time that is given to us";
    var length = line.length;
    document.getElementById("Length").innerHTML = length;
}

// A function using a for loop
var Instruments = ["Guiter", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// A function with an array
function array_Function() {
    var cars = [];
    cars[0] = "BMW";
    cars[1] = "Volvo";
    cars[2] = "Audi";
    cars[3] = "Mercedes";
    document.getElementById("Array").innerHTML = "This model of car is a " + cars[3] + ".";
}

// A function using the constant keyword
function constant_function() {
    const Dog = {breed:"Siberian Husky", color:"black", height:"53cm", weight: "20kg"};
    Dog.color = "white";
    Dog.type = "sled dog";
    document.getElementById("Constant").innerHTML = "The " + Dog.breed + " is commonly used as a " + Dog.type; 
}

// A function using the let keyword
function let_function() {
    var A = 150;
    document.write(A); 
    {
        let A = 230;
        document.write("<br>" + A);
    }
    document.write("<br>" + A);

}

// let keyword for creating an object
function object_function () {
let phone = {
    brand: "Samsung ",
    model: "Galaxy S23 ",
    OS: "Android 11.0 ",
    memory: "8 GB ",
    color: "pink gold ",
    description: function() {
        return "This phone is a " + this.color + this.brand + this.model + "with a " + this.OS + "and " + this.memory;
    }
};
document.getElementById("Object").innerHTML = phone.description();
}

// A function using a break statement
function break_function() {
    let text = "";
    for (let X = 0; X < 15; X++) {
    if (X === 7) {break;}
    text += "The number is " + X + "<br>";
}
document.getElementById("Break").innerHTML = text;
}

// A function using a continue statement
function continue_function() {
    let text = "";
    for (let X = 0; X < 15; X++) {
        if (X === 7) {continue;}
        text += "The number is " + X + "<br>";
    }
document.getElementById("Continue").innerHTML = text;
}