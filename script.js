// Preferred Learning Topics

const topics = ["HTML", "CSS", "JavaScript"];

let list = "";

topics.forEach(function(topic){
    list += "<li>" + topic + "</li>";
});

document.getElementById("topics").innerHTML = list;


// Form Submit

document.getElementById("courseForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let attendance = parseFloat(document.getElementById("attendance").value);
    let marks = parseFloat(document.getElementById("marks").value);

    // Name Validation

    if(name==""){
        alert("Enter Name");
        return;
    }

    // Roll Number Validation (Example: 55)

    let rollPattern = /^\d{2}$/;

    if(!rollPattern.test(roll)){
        alert("Roll Number must contain exactly 2 digits.");
        return;
    }

    // Age Validation

    if(age<17 || age>30){
        alert("Age should be between 17 and 30");
        return;
    }

    // Attendance Validation

    if(attendance<0 || attendance>100){
        alert("Attendance should be between 0 and 100");
        return;
    }

    // Marks Validation

    if(marks<0 || marks>100){
        alert("Marks should be between 0 and 100");
        return;
    }

    // Personalized Attendance Rule

    let lastDigit = parseInt(roll.charAt(roll.length-1));

    let requiredAttendance;

    if(lastDigit>=0 && lastDigit<=3){
        requiredAttendance=70;
    }
    else if(lastDigit>=4 && lastDigit<=6){
        requiredAttendance=75;
    }
    else{
        requiredAttendance=80;
    }

    // Call Function

    let result = checkEligibility(attendance, marks, requiredAttendance);

    document.getElementById("result").innerHTML = result;

});


// Eligibility Function

function checkEligibility(attendance, marks, requiredAttendance){

    if(attendance>=requiredAttendance && marks>=60){
        return "✅ Eligible";
    }

    else if(attendance>=60 && marks>=40){
        return "🟡 Improvement Required";
    }

    else{
        return "❌ Not Eligible";
    }

}