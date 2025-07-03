function getAge() {
var birthYear = prompt("Write the year of your birth");
var date = new Date();
var thisYear = date.getFullYear();
var age = thisYear - birthYear;

if (birthYear == "") {
alert("enter the year");
return false;
} else {
document.querySelector("#age").innerHTML = "You are " + age + "  years old this year";
}
}