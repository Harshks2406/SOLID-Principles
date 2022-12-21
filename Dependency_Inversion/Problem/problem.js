//Here we have implemented Payment Gateway direct into the main code
//So, if we have to change the gateway then we have to change the whole logic

class Store{
    constructor(user){
        this.stripe = new Stripe(user)
    }

    purchaseBike(quantity){
        this.stripe.makePayment(200*quantity)
    }
    purchaseHelmet(quantity){
        this.stripe.makePayment(15*quantity)
    }
}

class Stripe{
    constructor(user){
        this.user = user
    }
    makePayment(amount){
        console.log(`${this.user} made payment of $${amount} with Stripe`)
    }
}

const store = new Store('John')
store.purchaseBike(2)
store.purchaseHelmet(2)