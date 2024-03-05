// Q1:
// var city = prompt("Enter Your City")
// if(city == "Karachi"){
// document.write("<h1>Welcome to city of " + city + "</h1>")
// }


// Q2:
// var gander = prompt("Plese enter your gander (male or female)")
// if (gander == "male") {
//     document.write("<h1>Good Morning Sir.</h1>")
// }
// else if (gander == "female"){
//     document.write("<h1>Good Morning Mam.</h1>")
// }
// else {
//     document.write("<h1>Kindly Type Correct Gender</h1>")
// }


// Q3:
// var traficColor = prompt("type input color of road traffic signal")
// if (traficColor == "red") {
//     document.write("<h1>Must Stop</h1>")
// } else if(traficColor == "yellow") {
//     document.write("<h1>Ready to Move</h1>")
// } else if(traficColor == "green") {
//     document.write("<h1>Move Now</h1>")
// }
// else{
//     document.write("<h1>Type Correct Trafic Color</h1>")
// }


// Q4:
// var fuel = +prompt("Please enter remaining fuel in car")
// if (fuel < 0.25) {
//     document.write("“Your fule is <0.25litres,Please refill the fuel in your car”")
// } else {
//     document.write("“Your fule is >0.25litres, Keep Driving”")
// }


// Q5:
// var a =4;
// a = ++a
// if (a === 5) {
//     alert("varable a is true");
// } else {
//     alert("varable a is false");
// }
// var b =82;
// b = b++
// if (b === 83) {
//     alert("varable b is true");
// } else {
//     alert("varable b is false");
// }
// var c =12;
// if (c++ === 13) {
//     alert("Condition 1 is true");
// } 
// c = c++
// if(c === 13){
//     alert("Condition 2 is true");
// } 
// c = ++c
// if(c < 14){
//     alert("Condition 2 is true");
// } 
// if(c === 14){
//     alert("Condition 2 is true");
// } 
// D:
// var materialCost= 20000
// var laborlCost= 2000
// var totalCost = materialCost + laborlCost;
// if (totalCost === laborlCost + materialCost) {
//     alert("The Cost Equal")
// }
// else{
//     alert("The Cost Are Not Equal")
// }



// Q6:
// var totalMarks = 300;
// var subject1 = +prompt("Enter Subject: Math Obtained Marks in 100");
// var subject2 = +prompt("Enter Subject: Islamiat Obtained Marks in 100");
// var subject3 = +prompt("Enter Subject: Urdu Obtained Marks in 100");
// subjectTotal = subject1 + subject2 + subject3;
// percentage =  subjectTotal / totalMarks * 100 

// document.write("<h1>Marks Sheet</h1>")
// document.write("</br></br></br>")
// if (percentage >= 80) {
//     document.write("<h3>Total Marks: 300</h3>")
//     document.write("<h3>Marks Obtained: " + subject1 + " </h3>")
//     document.write("<h3>Percentage: " + percentage + "%</h3>")
//     document.write("<h3>Grade: A-one</h3>")
//     document.write("<h3>Remarks: Excellent</h3>")
// } else if (percentage >= 70) {
//     document.write("<h3>Total Marks: 300</h3>")
//     document.write("<h3>Marks Obtained: " + subject1 + " </h3>")
//     document.write("<h3>Percentage: " + percentage + "%</h3>")
//     document.write("<h3>Grade: A</h3>")
//     document.write("<h3>Remarks: Good</h3>")
// } else if (percentage >= 60) {
//     document.write("<h3>Total Marks: 300</h3>")
//     document.write("<h3>Marks Obtained: " + subject1 + " </h3>")
//     document.write("<h3>Percentage: " + percentage + "%</h3>")
//     document.write("<h3>Grade: B</h3>")
//     document.write("<h3>Remarks: You need to improve</h3>")
// } else {
//     document.write("<h3>Total Marks: 300</h3>")
//     document.write("<h3>Marks Obtained: " + subject1 + " </h3>")
//     document.write("<h3>Percentage: " + percentage + "%</h3>")
//     document.write("<h3>Grade: Fail</h3>")
//     document.write("<h3>Remarks: Sorry</h3>")
// }



// Q7:
// document.write("<h1>Guess Game</h1>")
// var guessNumber = +prompt("(ranging from 1 to 10)")
// if (guessNumber == 5) {
//     document.write("“Bingo! Correct Answer”.")
// } else {
//     document.write("“Close enough to the correct answer”.")
// }



// Q8:
// var num= +prompt ("Enter your number");
// if(num%3===0){
// document.write("Your "+ num +" is can devided by 3");
// }
// else{
// document.write("Your "+ num +" isn't devided by 3");
// }



// Q9:
// var num = +prompt("even number or an odd number.")
// if (num == 6) {
//     document.write("This is Even " +num+ " Number ")
// } else if (num == 0) {
//     document.write("This is Even " +num+ " Number ")
// } else if (num == 2) {
//     document.write("This is Even " +num+ " Number ")
// } else if (num == 4) {
//     document.write("This is Even " +num+ " Number ")
// } else if (num == 8) {
//     document.write("This is Even " +num+ " Number ")
// }else {
//     document.write("This is Odd " +num+ " Number ")
// }



// Q10:
// var wather = prompt("Temperature")
// if (wather > 40) {
//     document.write("“It is too hot outside.”")
// } else if (wather > 30) {
//     document.write("“The Weather today is Normal.”")
// } else if (wather > 20) {
//     document.write("“Today’s Weather is cool.”")
// } else if (wather > 10) {
//     document.write("“OMG! Today’s weather is so Cool.”")
// }



// Q11:
// var num1 = +prompt("First number")
// var oper = prompt("Operation")
// var num2 = +prompt("Second number")
// document.write ("<h1>calculator</h1>")
// if (oper == "+") {
//     document.write(num1 + " " + oper + " " + num2 +" = "+ (num1 + num2) )
// } else if (oper == "-") {
//     document.write(num1 + " " + oper + " " + num2 +" = "+ (num1 - num2) )
// } else if (oper == "*") {
//     document.write(num1 + " " + oper + " " + num2 +" = "+ (num1 * num2) )
// } else if (oper == "/") {
//     document.write(num1 + " " + oper + " " + num2 +" = "+ (num1 / num2) )
// } else if (oper == "%") {
//     document.write(num1 + " " + oper + " " + num2 +" = "+ (num1 * num2 /100) )
// }else {
//     document.write("Pleasr enter correct operation")
// }