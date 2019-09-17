import domUpdates from '../src/domUpdates'
class Orders {
    constructor(data) {
        this.data = data;
        this.dailyOrders;
        this.guestOrders;
    }

    getDailyOrders(date) {
        this.dailyOrders = this.data.roomServices.filter(service => {
            return service.date === date;
        })
        if (this.dailyOrders.length === 0) {
            domUpdates.showNoOrderData();
        } else {
            domUpdates.showDailyRoomServiceOrders('show-orders-by-date', this.dailyOrders);
        }
    }
    
    getCustomerOrderHistory(id) {
        this.guestOrders = this.data.roomServices.filter(user => {
            return user.userID === id;
        });
        domUpdates.showDailyRoomServiceOrders('guest-orders', this.guestOrders);
    }

    getCustomerOrderByDate(id, date) {
        this.guestOrders = this.data.roomServices.filter(user => {
            return user.userID === id;
        })
            if((this.guestOrders.filter(service => service.date === date)).length === 0) {
                domUpdates.showNoOrderDataForGuest();
            } else {
                return this.guestOrders.filter(service => service.date === date);
            };
    }

    getCustomerOrderTotal(id) {
        let allCustomerOrders = this.data.roomServices.filter(user => {
            return user.userID === id;
        }).reduce((acc, service) => {
            acc = service.totalCost += acc
            return acc;
        }, 0);
        return allCustomerOrders;
    }

}

export default Orders;