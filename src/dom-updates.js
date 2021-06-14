import Customer from "./customer";

let domUpdates = {

    welcomeCustomer(customerName) {
        let welcomeMessage = `
            <h2 class="user-greeting">Hello ${customerName}</h2>`
        document.querySelector(".customer-details-wrapper").insertAdjacentHTML("afterbegin", welcomeMessage);
    },

    toggleHidden(element1, element2) {
        element1.classList.toggle('hidden')
        element2.classList.toggle('hidden')
    },

    // displayCustomerExpense() {
    //     let dollars = currentCustomer.getExpense(hotel)
    //     let expenseMessage = ` 
    //         <p class="total-expense" id = "totalExpense">You've parted with ${dollars}</p>`
    //     document.getElementById("customerDetailsWrapper").insertAdjacentHTML("afterbegin", expenseMessage)
    // },

    // displayCustomerBooking() {
    
    // }
}

export default domUpdates;