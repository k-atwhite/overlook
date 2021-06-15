import Customer from "./customer";

let domUpdates = {

    welcomeCustomer(customerName) {
        let welcomeMessage = `
            <h2 class="user-greeting">Welcome ${customerName}</h2>`
        document.querySelector(".customer-details-wrapper").insertAdjacentHTML("afterbegin", welcomeMessage);
    },

    toggleHidden(element1) {
        element1.classList.toggle('hidden')
    },

    displayCustomerData(ledger, hotel, currentCustomer, container) {
        console.log(currentCustomer.bookings.length)
        if (!currentCustomer.bookings.length) {
            currentCustomer.addBooking(ledger);
            currentCustomer.getExpense(hotel);
        }

        let dollars = currentCustomer.totalExpense

        let expenseMessage = ` 
            <p class="total-expense" id = "totalExpense">You've parted with $${dollars}</p>`
        
        container.innerHTML = ""
        container.innerHTML = expenseMessage
    },

    renderTrips(container, bookingData) {
        container.innerHTML = ""
        bookingData.forEach(booking => {
            container.innerHTML += ` 
            <div class="trip-box" id="tripBox">
                <img src="./images/bed-icon.png" alt="bed icon">
                <h3>Date: ${booking.date}</h3>
                <h4>Room: ${booking.roomNumber}</h4>
            </div>
             `
        })
    },

    renderAvailableRooms(container, roomData) {
        container.innerHTML = ""
        roomData.forEach(room => {
            container.innerHTML += `
               <div class="available-room" id="${room.number}">
                    <img src="./images/bed-icon.png" alt="bed icon">
                    <p>Room Number: ${room.number}</p>
                    <p>Room Type: ${room.roomType}</p>
                    <p>Bed size: ${room.bedSize}</p>
                    <p>Numer of beds: ${room.numBeds}</p>
                    <p>Cost: $${room.costPerNight}</p>
                </div>
             `
        })

    },

    renderErrorMessage(container, apology) {
        container.innerHTML = ""
        container.innerHTML = `
        <p class="apology">${apology}</p>`
    }
}

export default domUpdates;

                    // <button class="add-stay-buttom" id="addStayButton">ADD STAY</button>
