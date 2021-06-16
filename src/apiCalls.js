import { onLoad } from './scripts'
import { loadData } from './scripts'

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

const postBooking = (user, dateSelected, roomNum) => {
    return fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify({
            userID: user,
            date: dateSelected,
            roomNumber: roomNum,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(() => onLoad())
    .then(() => loadData(user))
    .catch(err => console.error("There seems to be a problem", err))
}

export default {
    fetchAllData,
    fetchCustomerData,
    fetchRoomData,
    fetchBookingData,
    postBooking,
};
