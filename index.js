function calc()
{
let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);
let result;
let op = document.getElementById("operator").value;

if(op == "+")
{
    result = num1 + num2;
    document.getElementById("output").value = result;
}
else if(op == '-')
{
    result = num1 - num2;
    document.getElementById("output").value = result;
}
else if(op == '*')
{
    result = num1 * num2;
    document.getElementById("output").value = result;
}
else if(op == '/')
{
    result = num1 / num2;
    document.getElementById("output").value = result;
}
else if(op == '%')
{
    result = num1 % num2;
    document.getElementById("output").value = result;
}
else if(op != "+" || op != "-" || op != "*" || op != "/" || op != "%")
{
    document.getElementById("output").value = "Invalid Operator";
}
}

function clearFields()
{
    document.getElementById("output").value = " ";
    document.getElementById("operator").value = " ";
    document.getElementById("num1").value = " ";
    document.getElementById("num2").value = " ";
}

function message()
{
    window.alert("Thanks user for avaling the service of TWINKLE CALCULATOR.         Hope you liked it! Please visit again! .😊😊😊");
}

document.getElementById("btn").addEventListener("click",calc);
document.getElementById("clear").addEventListener("click", clearFields);
document.getElementById("bye").addEventListener("click",message);