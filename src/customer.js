class Customer {
    constructor(customer) {
        this.id = customer.id;
        this.name = customer.name;
        this.bookings = [];
        this.totalExpense = 0;
    };

    addBooking = (bookingData) => { 
        bookingData.forEach(booking => {
            if (booking.userID === this.id) {
                this.bookings.push(booking)
            }
        })
    };

    getExpense = (roomData) => {
        return this.bookings.reduce((totalExpenditure, booking) => {
            const matchedRoom = roomData.find(room => booking.roomNumber === room.number)
            totalExpenditure += matchedRoom.costPerNight
            this.totalExpense = Number(totalExpenditure.toFixed(2))
            return totalExpenditure
        }, 0)
    }
};

export default Customer;
