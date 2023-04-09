// Utilizing the .concate() method
function Buddha() {
    var part_1 = " All that we are ";
    var part_2 = " is the result ";
    var part_3 = " of what we ";
    var part_4 = " have thought.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("demo").innerHTML = whole_sentence;
}
// Utilizing the .slice() method
function Slice_Method() {
    var Text = "Apple, Banana, Kiwi";
    var Part = Text.slice(7,13);
    document.getElementById("slice").innerHTML = Part;
}
// Utilizing the .toUpperCase() method
function UpperCase_Method() {
    var Text = "House of the Dragon";
    var Result = Text.toUpperCase();
    document.getElementById("uppercase").innerHTML = Result;
}
// Utilizing the .search() method
function Search_Method() {
    var text = "Brace yourself, Winter is Coming";
    var position = text.search("Winter");
    document.getElementById("search").innerHTML = position;
}
// Utilizing the .string() method
function string_Method() {
    var X = 2345;
    document.getElementById("numbers_to_string").innerHTML = X.toString();
}
// Utilizing the .toPrecision() method
function precision_Method() {
    var A = 65123.89089878756545657
    document.getElementById("precision").innerHTML = A.toPrecision(8);
}
// Utilizing the .toFixed() method
function fixed_Method() {
    var Num = 6.79801;
    var N = Num.toFixed(2);
    document.getElementById("fixed").innerHTML = N;
}
// Utilizing the .valueOf() method
function valueOf_Method() {
    var Val = 15;
    var V = Val.valueOf();
    document.getElementById("value").innerHTML = V;

}