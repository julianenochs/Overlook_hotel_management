import domUpdates from '../src/domUpdates'
class Orders {
    constructor(data) {
        this.data = data;
        this.dailyOrders;
        this.guestOrders;
// date
    }

    getDailyOrders(date) {
        this.dailyOrders = this.data.roomServices.filter(service => {
            return service.date === date
        })
        if (this.dailyOrders.length === 0) {
            domUpdates.showNoOrderData()
        } else {
            domUpdates.showDailyRoomServiceOrders(this.dailyOrders)
        }
    }
    
    getOrdersByCustomer(id) {
        this.guestOrders = this.data.roomServiceOrders.find(user => user.userID === id)
        return this.guestOrders
    }

    getOrderDates() {
        
    }

    // getOrdersByDate()
    // getTotalSpentByCustomer()

}

export default Orders;