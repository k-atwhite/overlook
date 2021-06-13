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

// message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }


// const deleteBooking = (data, userID) => {

//     const initObj = { userID: userID, date: data.date, roomNumber: data.roomNumber }
//     const init = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(initObj)
//     }
//     return fetch("http://localhost:3001/api/v1/bookings", init)
//         .then(response => response.json())
//         .catch(err => console.log(`There seems to be a problem: ${err.message}`))
// }

export {
    fetchAllData,
    fetchCustomerData,
    fetchRoomData,
    fetchBookingData,
    addBooking,
    // deleteBooking
};


// Get single customer	http://localhost:3001/api/v1/customers/<id> where<id> will be a number of a customer’s id

// Delete single booking	http://localhost:3001/api/v1/bookings/<id> where<id> will be a number of a booking’s id	DELETE	none	{ message: Booking #<id> has been deleted 