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

// Question 3
// Does a string begin with "http://" or "https://"

var myWebsite = "http://www.droid-life.com";
var myOtherWebsite = "https://www.phonearena.com";

if (myWebsite.indexOf(0-6) !== "http://") {
	console.log("Question 3: " + true)
		} else { 
			console.log("Question 3: " + false)
}		if (myOtherWebsite.indexOf(0-7) !== "https://") {
		console.log("Question 3: " + true)
			} else {
		console.log("Question 3: " + false)
		// Nested Conditional: Deliverable 3
};

// Question 4
//  Take a string that is all lowercase and uppercase the first letter of each word

String.prototype.capitalize = function() {
    return this.charAt(0,11).toUpperCase() + this.slice(1);
}

console.log("Question 4: " + "capitalize this!".capitalize());