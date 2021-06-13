
import './css/base.scss';
import { fetchAllData } from './apiCalls';

import './images/background.jpg'
import Booking from './booking';
import Customer from './customer';
import Room from './room'
import domUpdates from './dom-updates'

///// QUERY SELECTORS /////
let loginWrapper = document.getElementById("loginWrapper")
let loginForm = document.getElementById("loginForm");
let loginSubmitButton = document.getElementById("login-submit-button");
let loginErrorMessage = document.getElementById("loginErrorMessage");
let customerDetailsWrapper = document.getElementById("customerDetailsWrapper");

///// EVENT LISTENERS /////
window.addEventListener("load", loadData);
loginSubmitButton.addEventListener("click", instantiateCustomer);


///// WINDOW LOAD /////
function loadData() {
    fetchAllData()
        .then(data => {
        console.log(data[0])
        console.log(data[1])
        console.log(data[2])
        })
}


function validateLogin(userID) {
    // e.preventDefault();
    const username = loginForm.username.value
    const password = loginForm.password.value
    // make this dynamic for each customer
    if (username === "customer50" && password === "overlook2021") {
        // alert("You have successfully logged in!")
        domUpdates.toggleHidden(loginWrapper, customerDetailsWrapper)
        let customerName = "ivanka"
        domUpdates.welcomeCustomer(customerName)
    } else {
        loginErrorMessage.style.opacity = 1
    }
}

function instantiateCustomer(e) {
    e.preventDefault();
    const username = loginForm.username.value
    const userID =username.substring(username.length - 2)
    validateLogin(userID)
}


