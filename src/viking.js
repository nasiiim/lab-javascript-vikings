// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;

    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        console.log(damage)
        console.log(this.health)
        this.health -= damage
        console.log(this.health)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }


    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        const vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const saxonRandomIndex = [Math.floor(Math.random() * this.saxonArmy.length)]
        const saxonRandom = this.saxonArmy[saxonRandomIndex];
        const result = saxonRandom.receiveDamage(vikingRandom.strength)
         this.saxonArmy.splice(saxonRandomIndex, 1)
         return result
        
    }

    saxonAttack() {

        const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const vikingRandomIndex = [Math.floor(Math.random() * this.vikingArmy.length)]
        const vikingRandom = this.vikingArmy[vikingRandomIndex]
        const result = vikingRandom.receiveDamage(saxonRandom.strength)
        this.vikingArmy.splice(vikingRandomIndex, 1)
        return result
    }

    showStatus() {

        console.log(this.saxonArmy.length)
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"

        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
            
        } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


