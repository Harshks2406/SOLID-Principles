//We add a middleware of payment
//So, incase of changing the gateway we just have to change a segment of code.

class Store{
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity){
        this.paymentProcessor.pay(200*quantity)
    }
    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15*quantity)
    }
}

class StripePaymentProcessor{
    constructor(user){
        this.Stripe = new Stripe(user)
    }
    pay(amount){
        this.Stripe.makePayment(amount)
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

class PaypalPaymentProcessor{
    constructor(user){
        this.user = user
        this.paypal = new Paypal()
    }
    pay(amount){
        this.paypal.makePayment(this.user,amount)
    }
}

class Paypal{
    makePayment(user,amount){
        console.log(`${user} made payment of $${amount} with Paypal`)
    }
}

const store = new Store(new PaypalPaymentProcessor('John'))
store.purchaseBike(2)
store.purchaseHelmet(2)