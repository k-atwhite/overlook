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

    // displayCustomerData() {
    //     currentCustomer.getExpense()
    // },
}

export default domUpdates;