import Customer from "./customer";

let domUpdates = {

    welcomeCustomer(customerName) {
        let welcomeMessage = `
            <h2 class="user-greeting">Welcome ${customerName}</h2>`
        document.querySelector(".customer-details-wrapper").insertAdjacentHTML("afterbegin", welcomeMessage);
    },

    toggleHidden(element1, element2, element3) {
        element1.classList.toggle('hidden')
        element2.classList.toggle('hidden')
        element3.classList.toggle('hidden')
    },

    displayCustomerData(ledger, hotel, currentCustomer) {
        currentCustomer.addBooking(ledger);
        currentCustomer.getExpense(hotel);
        let dollars = currentCustomer.totalExpense
        let expenseMessage = ` 
            <p class="total-expense" id = "totalExpense">You've parted with $${dollars}</p>`
        document.getElementById("pastTripsButton").insertAdjacentHTML("afterend", expenseMessage)
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
    }
}

export default domUpdates;