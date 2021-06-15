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

    sortBookings = () => {
        this.bookings = this.bookings.sort((a, b) => new Date(a.date) - new Date(b.date))
    }

    returnPastTrips(todayDate) {
       const pastBookings =  this.bookings.filter(booking => {
            const tripDate = new Date(booking.date)
            const today = new Date(todayDate)
            if (tripDate <= today) {
                return true
            } else {
                return false
            }
        })

        if (pastBookings.length) {
            return pastBookings
        } else {
            return false
        }
    }

    returnFutureTrips(todayDate) {
        const pastBookings = this.bookings.filter(booking => {
            const tripDate = new Date(booking.date)
            const today = new Date(todayDate)
            if (tripDate >= today) {
                return true
            } else {
                return false
            }
        })

        if (pastBookings.length) {
            return pastBookings
        } else {
            return false
        }
    }
    

    getExpense = (roomData) => {
        return this.bookings.reduce((totalExpenditure, booking) => {
            const matchedRoom = roomData.find(room => booking.roomNumber === room.number)
            totalExpenditure += matchedRoom.costPerNight
            this.totalExpense = Number(totalExpenditure.toFixed(2))
            return totalExpenditure
        }, 0)
    };
};

export default Customer;
