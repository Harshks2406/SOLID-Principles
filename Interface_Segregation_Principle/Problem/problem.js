//We have Classes(Interface) and functions but the problem is that
//the sub-classes does not implement all the functions of class

class Entity{
    constructor(name,attackDamage,health){
        this.name = name
        this.attackDamage = attackDamage
        this.health = health
    }

    move(){
        console.log(`${this.name} moved`)
    }

    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
        targetEntity.takeDamage(this.attackDamage)
    }
    takeDamage(amount){
        this.health -= amount
        console.log(`${this.name} has ${this.health} health remaining`)
    }
}

class Character extends Entity{

}

class Wall extends Entity{
    constructor(name, health){
        super(name,0,health)
    }
    move(){
        return null
    }
    attack(){
        return null
    }
}

class Turrent extends Entity{
    constructor(name,attackDamage){
        super(name,attackDamage,-1)
    }
    move(){
        return null
    }
    takeDamage(){
        return null
    }
}

const turret = new Turrent('Turrent',5)
const character = new Character('Character',3,100)
const wall = new Wall('Wall',200)

turret.attack(character)
character.move()
character.attack(wall)