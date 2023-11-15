//Javascript code for conversion of temperature
document.addEventListener("DOMContentLoaded",function () {
const celsiusInput= document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click",function () {
const celsiusValue = parseFloat(celsiusInput.value);

if(!isNaN(celsiusValue))
{
//convert celsius to fahrenheit and displaying the result
const fahrenheitValue = (celsiusValue * 9/5) + 32;
fahrenheitInput.value = fahrenheitValue.toFixed(2);
}
else
{
//If input is invalid, DISPLAY and error message
alert("Please enter a valid temperature in Celsius.");
}
});
});
