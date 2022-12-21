//Here we have a Class and Sub-classes
//Sub Classes should implement all the functions of the Base C;ass
//But here One Sub-Class does not implement all the functions of Base Class

class Bird{
    fly(){
        console.log('I can Fly')
    }
    swim(){
        console.log('I can Swim')
    }
}

class Duck extends Bird{
    quack(){
        console.log('I can quack quack')
    }
}

class Penguin extends Bird{
    fly(){
        throw new exception('I cannot fly')
    }
}

function flyBird(bird){
    bird.fly()
}
function swimBird(bird){
    bird.swim()
}

const duck = new Duck()
const penguin = new Penguin()
flyBird(duck)
swimBird(duck)
swimBird(penguin)
flyBird(penguin)