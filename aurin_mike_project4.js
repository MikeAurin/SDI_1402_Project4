// Mike Aurin
// SDI 1402
// Project 4
// Building a Library of Functions

// Question 1
// Does a number follow the same pattern as 123-456-7890

var myTelephone = "407-400-4321";
var myOtherNumber = "123-456-7890";

if (myOtherNumber.length === myTelephone.length) {
	console.log("Question 1: " + true); 
	} else {
		console.log("Question 1: " + false)

};
	
//Question 2
// Does an email contain a ".edu" in the string


myEmail = "mikeaurin@fullsail.com";
emailCharacters = myEmail.match(["a-z"]+ "@" + ["a-z",".","a-z"]);
if (emailCharacters != myEmail) {
    console.log("Question 2: " + myEmail + " is a valid email address.");
	} else {
		console.log("Question 2: " + "Please enter a valid email address.");
};
