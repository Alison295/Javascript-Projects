// A function with HTML and JS using a ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride; 
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// A function with HTML and JS using a ternary operation with input from the browser
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote ": "You can vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}

// A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color; 
}
// A function to display the results of the constructor in an HTML element
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

}

// A nested function
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Add_Numbers();
    function Add_Numbers() {
        var X = 10;
        var Y = 20;
        document.write(X +Y +"<br>" );
    }
}
