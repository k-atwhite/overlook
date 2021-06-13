let domUpdates = {

    welcomeCustomer(customerName) {
        let welcomeMessage = `
            <h2 class="user-greeting">Hello ${customerName}</h2>`
        document.querySelector(".customer-details").insertAdjacentHTML("afterbegin", welcomeMessage);
    }
}