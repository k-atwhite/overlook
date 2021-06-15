
import './css/base.scss';
import './images/background3.jpg'
import './images/bed-icon.png'

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
let roomDisplayWrapper = document.getElementById("roomDisplayWrapper");
let pastTripsButton = document.getElementById("pastTripsButton");
let futureTripsButton = document.getElementById("futureTripsButton");
let bookButton = document.getElementById("bookButton")
let datePicker = document.getElementById("datePicker")


///// EVENT LISTENERS /////
window.addEventListener("load", onLoad)
loginSubmitButton.addEventListener("click", findCustomerFromLogin);
pastTripsButton.addEventListener("click", displayPastTrips)
futureTripsButton.addEventListener("click", displayFutureTrips)
bookButton.addEventListener("click", displayDatePicker)
datePicker.addEventListener("click", showAvailableRooms)


///// GLOBAL VARIABLES /////
let currentCustomer
let hotel = []
let ledger = []
let today = "'2020-01-27'"
const picker = datepicker(selector, options)


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
    domUpdates.toggleHidden(loginWrapper, customerDetailsWrapper, bookButton)
    domUpdates.welcomeCustomer(currentCustomer.name)
    domUpdates.displayCustomerData(ledger, hotel, currentCustomer)
}

function fillHotel(roomsDataset) {
    roomsDataset.forEach(room => hotel.push(room))
}

function fillLedger(bookingsDataset) {
    bookingsDataset.forEach(booking => ledger.push(booking))
}

function displayPastTrips() {
    currentCustomer.sortBookings()
    domUpdates.renderTrips(roomDisplayWrapper, currentCustomer.returnPastTrips(today))
}

function displayFutureTrips() {
    currentCustomer.sortBookings()
    domUpdates.renderTrips(roomDisplayWrapper, currentCustomer.returnFutureTrips(today))
}

function displayDatePicker() {
    domUpdates.toggleHidden(customerDetailsWrapper, datePicker)
}

function showAvailableRooms() {
    
}

