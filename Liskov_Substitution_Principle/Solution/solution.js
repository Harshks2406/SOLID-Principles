//Here we have broken Base Class in such a way that all the Sub-Classes implement all the functions.

class FlyBird{
    fly(){
        console.log('I can fly')
    }
}

class SwimBird{
    swim(){
        console.log('I can swim')
    }
}

class Duck extends FlyBird{
    quack(){
        console.log('I can quack quack')
    }
}

class Penguin extends SwimBird{
}

function flyingBird(bird){
    bird.fly()
}
function SwimingBird(bird){
    bird.swim()
}

const duck = new Duck()
const penguin = new Penguin()

flyingBird(duck)
SwimingBird(penguin)