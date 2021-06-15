import {onLoad} from './scripts'

const fetchAllData = () => {
    const promises = [fetchCustomerData(), fetchRoomData(), fetchBookingData()]
    return Promise.all(promises)
        .catch(err => console.log(`There seems to be a problem: ${err.message}`))
}

const fetchCustomerData = () => {
    return fetch("http://localhost:3001/api/v1/customers")
        .then(response => response.json())
        .catch(err => console.log(`There seems to be a problem: ${err.message}`))
}

const fetchRoomData = () => {
    return fetch("http://localhost:3001/api/v1/rooms")
        .then(response => response.json())
        .catch(err => console.log(`There seems to be a problem: ${err.message}`))
}

const fetchBookingData = () => {
    return fetch("http://localhost:3001/api/v1/bookings	")
        .then(response => response.json())
        .catch(err => console.log(`There seems to be a problem: ${err.message}`))
}

const addBooking = (data, userID) => {

    const initObj = { userID: userID, date: data.date, roomNumber: data.roomNumber }
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(initObj)
    }
    return fetch("http://localhost:3001/api/v1/bookings", init)
        .then(response => response.json())
        .catch(err => console.log(`There seems to be a problem: ${err.message}`))
}

const addBooking = (user, dateSelected, roomNum) => {
    return fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify({
            userID: user.id,
            date: dateSelected,
            roomNumber: roomNum,
        })
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(checkForError)
    .then(() => onLoad())
    .catch(err => console.error("There seems to be a problem": err))
}

export {
    fetchAllData,
    fetchCustomerData,
    fetchRoomData,
    fetchBookingData,
    addBooking,
};
