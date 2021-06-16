
import './css/base.scss';
import './images/background3.jpg'
import './images/bed-icon.png'
import apiCalls from './apiCalls';
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
let welcomeMessageWrapper = document.getElementById("welcomeMessageWrapper")
let expenseWrapper = document.getElementById("expenseWrapper")
let roomDisplayWrapper = document.getElementById("roomDisplayWrapper");
let pastTripsButton = document.getElementById("pastTripsButton");
let futureTripsButton = document.getElementById("futureTripsButton");
let bookButton = document.getElementById("bookButton")
let calendar = document.getElementById("calendar")
let checkAvailabilityButton = document.getElementById("checkAvailability")
let availableRoomDiv = document.getElementById("availableRooms")
let typeFilter = document.getElementById("typeFilter")
let returnToCustomerInfo = document.getElementById("returnToCustomerInfo")
// let bookingThanks = document.getElementById("bookingThanks")



///// EVENT LISTENERS /////
window.addEventListener("load", onLoad)

loginSubmitButton.addEventListener("click", findCustomerFromLogin);
pastTripsButton.addEventListener("click", displayPastTrips)
futureTripsButton.addEventListener("click", displayFutureTrips)
bookButton.addEventListener("click", displayDatePicker)
checkAvailabilityButton.addEventListener("click", findAvailableRooms)
returnToCustomerInfo.addEventListener("click", returnToCustomerPage)
availableRoomDiv.addEventListener("click", addNewBooking)


///// GLOBAL VARIABLES /////
let currentCustomer
let hotel = []
let ledger = []
let today = "2020-01-27"


///// EVENT HANDLERS /////
export function onLoad() {
    hotel = []
    ledger = []
    apiCalls.fetchAllData()
        .then(data => {
            fillHotel(data[1].rooms)
            fillLedger(data[2].bookings)
        })
}

function fillHotel(roomsDataset) {
    roomsDataset.forEach(room => {
        const newRoom = new Room(room)
        hotel.push(newRoom)
    })
}

function fillLedger(bookingsDataset) {
    bookingsDataset.forEach(booking => {
        const newBooking = new Booking(booking)
        ledger.push(newBooking)
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

export function loadData(userID) {
    apiCalls.fetchAllData()
        .then(data => {
        assignCurrentCustomer(data[0].customers, userID)
        })
}

function assignCurrentCustomer(customerDataset, userID) {
    customerDataset.find(customer => {
        if (customer.id === Number(userID)) {
         currentCustomer = new Customer(customer)
        }
    })
    domUpdates.toggleHidden(loginWrapper)
    domUpdates.toggleHidden(customerDetailsWrapper)
    domUpdates.toggleHidden(bookButton)

    domUpdates.welcomeCustomer(welcomeMessageWrapper, currentCustomer.name)
    domUpdates.displayCustomerData(ledger, hotel, currentCustomer, expenseWrapper)
}

function displayPastTrips() {
    currentCustomer.sortBookings()
    domUpdates.renderTrips(roomDisplayWrapper, currentCustomer.returnPastTrips(today))
}

function displayFutureTrips() {
    currentCustomer.sortBookings()
    domUpdates.renderTrips(roomDisplayWrapper, currentCustomer.returnFutureTrips(today))
}

function returnToCustomerPage() {
    domUpdates.toggleHidden(calendarWrapper)
    domUpdates.toggleHidden(customerDetailsWrapper)
    domUpdates.toggleHidden(bookButton)
    domUpdates.toggleHidden(returnToCustomerInfo)
}

function displayDatePicker() {
    domUpdates.toggleHidden(customerDetailsWrapper)
    domUpdates.toggleHidden(calendarWrapper)
    domUpdates.toggleHidden(bookButton)
    domUpdates.toggleHidden(returnToCustomerInfo)
    calendar.value = today
}

function findRoomsByType(potentialRooms) {
    let matchedRooms = potentialRooms.filter(room => room.roomType === typeFilter.value)
    if(matchedRooms.length) {
        return matchedRooms
    }else {
        return false
    }
}

function findAvailableRooms() {
    let desiredDate = calendar.value
    let scrubbedDate = desiredDate.split('-').join('/')

        let unBooked = ledger.filter(booking => {
            return booking.date === scrubbedDate
        }).map(booking => booking.roomNumber)

    let availableRooms = hotel.filter(room => !unBooked.includes(room.number))

    availableRooms = findRoomsByType(availableRooms)
    
    if (availableRooms.length) {
        domUpdates.renderAvailableRooms(availableRoomDiv, availableRooms)
    } else {
        let apology = "Please, please, please forgive us! We have no rooms of this type available. Please try another date, please!"
        domUpdates.renderErrorMessage(availableRoomDiv, apology)
    }
}

function addNewBooking(event) {
    let chosenRoom = event.target.closest("div").id
    let roomNumber = parseInt(chosenRoom)

    let reformattedDate = calendar.value.split('-').join('/');
    let user = currentCustomer.id

    apiCalls.postBooking(user, reformattedDate, roomNumber)

    domUpdates.toggleHidden(calendarWrapper)
    domUpdates.toggleHidden(loginWrapper)
    domUpdates.toggleHidden(returnToCustomerInfo)
}
