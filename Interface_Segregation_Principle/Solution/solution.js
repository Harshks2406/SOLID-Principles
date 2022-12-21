//We have created components which play a role of small interfaces
//So, instead of having one Class(Interface) we have broken it into smaller pieces.

class Entity{
    constructor(name){
        this.name = name
    }
}
const move={
    move(){
        console.log(`${this.name} moved`)
    }
}
const attacker={
    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
        targetEntity.takeDamage(this.attackDamage)
    }
}

const hasHealth = {
    takeDamage(health){
        this.health -= health
        console.log(`${this.name} has ${this.health} health remaining`)
    }
}

class Character extends Entity{
    constructor(name,attackDamage,health){
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

Object.assign(Character.prototype, move)
Object.assign(Character.prototype,attacker)
Object.assign(Character.prototype,hasHealth)

class Wall extends Entity{
    constructor(name,health){
        super(name)
        this.health=health
    }
}

Object.assign(Wall.prototype, hasHealth)

class Turrent extends Entity{
    constructor(name,attackDamage){
        super(name)
        this.attackDamage = attackDamage
    }
}

Object.assign(Turrent.prototype,attacker)

const turret = new Turrent('Turrent',5)
const character = new Character('Character',3,100)
const wall = new Wall('Wall',200)

turret.attack(character)
character.move()
character.attack(wall)