// A global variable function 
var A = 5;
function Multiply_Numbers_1() {
    document.write(A * 10 + "<br>");
}
function Multiply_Numbers_2() {
    document.write(A * 50 + "<br>");
}
Multiply_Numbers_1();
Multiply_Numbers_2();

// A local variable function
function Add_Numbers_1() {
    var B = 5;
    console.log(A + 10 + "<br>");
}
function Add_Numbers_2() {
    console.log(B + 50);
}
Add_Numbers_1();
Add_Numbers_2();

// A function with an if Statement that utilizes the new Date().getHours() method
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// My if Statement function
function Driver_License() {
var age = 17;
if (age >= 17) {
    document.getElementById("demo").innerHTML = "You can apply for a driving license";
 }
}

// A if else Statement
function Driver_License_2() {
    Age = document.getElementById("Age").value;
    if (Age >= 17) {
        Apply = "You are old enough to apply for a driving license!";
    }
    else {
        Apply = "You are not old enough to apply for a driving license!";
    }
    document.getElementById("license").innerHTML = Apply;
}

// A else if Statement 
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon!";
    }
    else {
        Reply = "Good Evening!";
    }
    document.getElementById("Time").innerHTML = Reply;
}