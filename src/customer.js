class Customer {
    constructor(customer) {
        this.id = customer.id;
        this.name = customer.name;
        this.bookings = [];
        this.totalExpense = 0;
    };

    addBooking = (reservationData) => {
        this.bookings.push(reservationData)
    }

    getExpense = () => {
        
    }
};

export default Customer;
