// When the Calculate BMI button is clicked, run this function
document.getElementById("calcBtn").addEventListener("click", () => {

    // Get weight value from input and convert it to a number
    let weight = parseFloat(document.getElementById("weight").value);

    // Get height value from input and convert it to a number
    let height = parseFloat(document.getElementById("height").value);

    // Check if weight or height is not a valid number
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerText = "Your BMI: Please enter valid inputs!";
        return; // Stop execution if inputs are invalid
    }

    // Convert height from centimeters to meters
    height = height / 100;

    // BMI formula → weight / (height × height)
    let bmi = weight / (height * height);

    // Keep only 2 decimal places
    bmi = bmi.toFixed(2);

    // Show the BMI result on the screen
    document.getElementById("result").innerText = "Your BMI: " + bmi;

    // Variable to store BMI status (Underweight, Normal, etc.)
    let status = "";

    // Check BMI category
    if (bmi < 18.5) {
        status = "Underweight";
    } 
    else if (bmi < 24.9) {
        status = "Normal weight";
    } 
    else if (bmi < 29.9) {
        status = "Overweight";
    } 
    else {
        status = "Obese";
    }

    // Display BMI status
    document.getElementById("status").innerText = "Status: " + status;
});
