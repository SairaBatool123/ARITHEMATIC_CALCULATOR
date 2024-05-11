var msg1 = prompt("Please Enter Your Name:");
var msg2 = alert("Hello!" + " " + msg1)
prompt("Do You Want To Try?","YES");

var num1 = +prompt("Please Enter First Number: ");
var num2 = +prompt("Please Enter Second Number: ");

var sum = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var modu = num1 % num2; //modulus Or reminder
var pow = num1 ** num2; //power

document.write("<center>"+
  "<table border = '5px'>" +
    "<tr>" +
    "<th>" + "Addition:" + "</th>" +
    "<td>" + sum + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Subtraction:" + "</th>" +
    "<td>" + sub + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Multiplication:" + "</th>" +
    "<td>" + mult + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Division:" + "</th>" +
    "<td>" + div + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Modulus:" + "</th>" +
    "<td>" + modu + "</td>" +
    "</tr>" +

    "<tr>" +
    "<th>" + "Power:" + "</th>" +
    "<td>" + pow + "</td>" +
    "</tr>" +
    "</table>"+
    "</center>"
);