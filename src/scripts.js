
import './css/base.scss';
import './images/background.jpg'
import { fetchAllData } from './apiCalls';
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
loginSubmitButton.addEventListener("click", findCustomerFromLogin);
window.addEventListener("load", onLoad)

///// GLOBAL VARIABLES /////
let currentCustomer
let hotel = []
let ledger = []


///// EVENT HANDLERS /////
function onLoad() {
    fetchAllData()
        .then(data => {
            fillHotel(data[1].rooms)
            fillLedger(data[2].bookings)
        })
}

function findCustomerFromLogin(event) {
    event.preventDefault();
    const username = loginForm.username.value
    let userID
    if (username.length === 10) {
        userID = username.substring(username.length - 2)
    } else {
        userID = username.substring(username.length - 1)
    }
    validateLogin(userID)
}

function validateLogin(userID) {
    const username = loginForm.username.value
    const password = loginForm.password.value
    if (username === `customer${userID}` && password === "overlook2021") {
        loadData(userID)
    } else {
        loginErrorMessage.style.opacity = 1
    }
}

function loadData(userID) {
    fetchAllData()
        .then(data => {
        assignCurrentCustomer(data[0].customers, userID)
        // console.log(data[0])
        // console.log(data[1])
        // console.log(data[2])
        })
}

function assignCurrentCustomer(customerDataset, userID) {
    customerDataset.find(customer => {
        if (customer.id === Number(userID)) {
         currentCustomer = new Customer(customer)
        }
    })
    domUpdates.toggleHidden(loginWrapper, customerDetailsWrapper)
    domUpdates.welcomeCustomer(currentCustomer.name)
    displayCustomerData()
}

function fillHotel(roomsDataset) {
    roomsDataset.forEach(room => hotel.push(room))
    // console.log(hotel)
}

function fillLedger(bookingsDataset) {
    bookingsDataset.forEach(booking => ledger.push(booking))
    // console.log(ledger)

}

function displayCustomerData() {
    currentCustomer.addBooking(ledger)
    currentCustomer.getExpense(hotel)
    let dollars = currentCustomer.totalExpense
    console.log(dollars)
    let expenseMessage = ` 
            <p class="total-expense" id = "totalExpense">You've parted with $${dollars}</p>`
    document.getElementById("pastTripButton").insertAdjacentHTML("afterend", expenseMessage)
}

