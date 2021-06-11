class Customer {
    constructor(customer) {
        this.id = customer.id;
        this.name = customer.name;
        this.bookings = [];
        this.expense = 0;
    };
};

export default Customer;