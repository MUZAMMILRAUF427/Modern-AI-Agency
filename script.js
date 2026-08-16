// =====================================
// VARIABLES
// =====================================

var companyName = "AI Nexus";
let visitors = 0;
const taxRate = 0.10;

// =====================================
// PAGE LOAD
// =====================================

window.onload = function () {
    alert("Welcome to " + companyName + " Website!");

    visitors += 1;

    console.log("Visitors : " + visitors);

    let age = prompt("Enter your age:");

    if (age == null || age == "") {
        alert("Age not entered.");
    }
    else if (age >= 18) {
        alert("You are eligible to explore all services.");
    }
    else {
        alert("Some services may require parental guidance.");
    }
};


// function toggleMenu() {
//     const menu = document.querySelector(".nav-links");
//     menu.classList.toggle("active");
// }


// function toggleMenu() {

//     document.getElementById("navLinks").classList.toggle("active");

// }

// =====================================
// FUNCTION 1
// BOOK CONSULTATION
// =====================================

function bookConsultation() {

    let confirmBooking = confirm("Do you want to book a consultation?");

    if (confirmBooking) {
        alert("Thank you! Our team will contact you soon.");
    }
    else {
        alert("Consultation cancelled.");
    }

}

// =====================================
// FUNCTION 2
// REQUEST QUOTE
// =====================================

function requestQuote() {

    let budget = prompt("Enter your project budget ($)");

    if (budget == "" || budget == null) {
        alert("Budget is required.");
        return;
    }

    budget = Number(budget);

    if (budget < 500) {
        alert("Starter Package Recommended.");
    }
    else if (budget >= 500 && budget < 1000) {
        alert("Professional Package Recommended.");
    }
    else {
        alert("Enterprise Package Recommended.");
    }

}

// =====================================
// FUNCTION 3
// SELECT PACKAGE
// =====================================

function selectPackage(plan, price) {

    let finalPrice = price;

    finalPrice += price * taxRate;

    alert(
        "Package : "
        + plan.toUpperCase()
        + "\nOriginal Price : $" + price
        + "\nTax : 10%"
        + "\nFinal Price : $" + finalPrice.toFixed(2)
    );

}



// =====================================
// FUNCTION 4
// CONTACT FORM
// =====================================

function submitForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {

        alert("Please fill all fields.");

        return;

    }

    if (message.length < 10) {

        alert("Message should contain at least 10 characters.");

        return;

    }

    alert("Thank you " + name + "! Your message has been sent.");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}

window.onscroll=function(){

if(document.documentElement.scrollTop>250){

document.getElementById("topBtn").style.display="block";

}else{

document.getElementById("topBtn").style.display="none";

}

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

// =====================================
// FUNCTION 5
// DISCOUNT CALCULATOR
// =====================================

function calculateDiscount(price) {

    let discount = 0;

    if (price >= 2000) {

        discount = 20;

    }
    else if (price >= 1000) {

        discount = 10;

    }
    else {

        discount = 5;

    }

    let finalAmount = price - (price * discount / 100);

    console.log("Final Amount : " + finalAmount);

}

// Example
calculateDiscount(2500);

// =====================================
// FUNCTION 6
// SWITCH STATEMENT
// =====================================

function serviceCategory(service) {

    switch (service) {

        case "AI":

            alert("Artificial Intelligence Solutions");
            break;

        case "Web":

            alert("Web Development Services");
            break;

        case "Mobile":

            alert("Mobile App Development");
            break;

        case "Cloud":

            alert("Cloud Solutions");
            break;

        case "Security":

            alert("Cyber Security Services");
            break;

        default:

            alert("Service Not Found");

    }

}

// Example
serviceCategory("AI");

// =====================================
// ARITHMETIC OPERATORS
// =====================================

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// =====================================
// ASSIGNMENT OPERATORS
// =====================================

let total = 100;

total += 50;
total -= 20;
total *= 2;
total /= 2;

console.log(total);

// =====================================
// COMPARISON OPERATORS
// =====================================

let x = 10;
let y = 15;

console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x === y);

// =====================================
// TERNARY OPERATOR
// =====================================

let online = true;

let status = online ? "Website Online" : "Website Offline";

console.log(status);



// ==========================
// DARK / LIGHT MODE
// ==========================

// function toggleTheme(){

//     let body = document.body;
//     let btn = document.getElementById("theme-toggle");

//     body.classList.toggle("light-mode");

//     if(body.classList.contains("light-mode")){

//         btn.innerHTML = "☀️ Light";
//         localStorage.setItem("theme","light");

//     }else{

//         btn.innerHTML = "🌙 Dark";
//         localStorage.setItem("theme","dark");

//     }

// }

// // Load Saved Theme

// window.addEventListener("load",function(){

//     let savedTheme = localStorage.getItem("theme");

//     if(savedTheme === "light"){

//         document.body.classList.add("light-mode");

//         document.getElementById("theme-toggle").innerHTML="☀️ Light";

//     }

// });



//=============================
// THEME TOGGLE
//=============================

const toggle=document.getElementById("theme-toggle");

// Load saved theme

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light-mode");

    toggle.checked=true;

    document.querySelector(".icon").innerHTML="☀️";

}

toggle.addEventListener("change",function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        document.querySelector(".icon").innerHTML="☀️";

        localStorage.setItem("theme","light");

    }else{

        document.querySelector(".icon").innerHTML="🌙";

        localStorage.setItem("theme","dark");

    }

});

//==========================
// Live Clock
//==========================

function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + ampm;

}

setInterval(updateClock,1000);

updateClock();


//==========================
// Theme Color Picker
//==========================

function changeColor(color){

    document.documentElement.style.setProperty("--main-color", color);

    localStorage.setItem("themeColor", color);

}

// Load Saved Color

window.addEventListener("load",()=>{

    let savedColor = localStorage.getItem("themeColor");

    if(savedColor){

        document.documentElement.style.setProperty("--main-color", savedColor);

    }

});

// =====================================
// EXTRA FUNCTION
// =====================================

function showCompanyInfo() {

    alert(
        "Company : " + companyName +
        "\nVisitors : " + visitors
    );

}