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
            domUpdates.showDailyRoomServiceOrders('show-orders-by-date', this.dailyOrders)
        }
    }
    
    getOrdersByCustomer(id) {
        this.guestOrders = this.data.roomServices.filter(user => {
            return user.userID === id
        });
        domUpdates.showDailyRoomServiceOrders('guest-orders', this.guestOrders);
    }

    getCustomerOrderByDate(date) {
        return this.guestOrders.filter(service => service.date === date);
    }

    // getTotalSpentByCustomer()

}

export default Orders;