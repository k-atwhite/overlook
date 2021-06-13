
import './css/base.scss';
import { fetchAllData } from './apiCalls';

import './images/background.jpg'
import Booking from './booking';
import Customer from './customer';
import Room from './room'
import domUpdates from './dom-updates'

///// QUERY SELECTORS /////
const loginForm = document.getElementById("loginForm")
// const usernameInput = document.getElementById("usernameField")
// const passwordInput = document.getElementById("passwordField")
const loginSubmitButton = document.getElementById("login-submit-button")
const loginErrorMessage = document.getElementById("loginErrorMessage")

///// EVENT LISTENERS /////
loginSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value
    const password = loginForm.password.value
    // make this dynamic for each customer
    if (username === "customer50" && password === "overlook2021") {
    // invoke function to show customer homepage
        alert("You have successfully logged in!")
        location.reload();
    } else {
        loginErrorMessage.style.opacity = 1
    }
})

///// WINDOW LOAD /////
const loadData = () => {
    fetchAllData()
        .then(data => {
            console.log(data[0])
            console.log(data[1])
            console.log(data[2])
        })
}

window.addEventListener("load", loadData)



