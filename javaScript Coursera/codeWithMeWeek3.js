var fruits =["banana","apple","oraing"];

function loadFruits(){
  document.getElementById("fruits").innerHTML = fruits;
}

function myFunction(){
  var fruit = prompt("what is your fruite");
  fruits[fruits.length] = fruit; // get the last fruit that had been add by prompt and get the last element number then add to the array 
  document.getElementById("fruits").innerHTML = fruits;
}

var grades = [2,5,,,9,7,,7];
var sum = 0;

if(grades.length > 0){
	for (var i = 0; i < grades.length; i++) {
		grades[i]
	};

	document.write(sum/grades.length);
} else
	document.write("Empty Array");