let player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function (damage) {
        if (this.energy - damage <= 0) {
            this.loseLife();
            this.energy = 100;
            return;
        } 

        this.energy -= damage;
    },
    recoverEnergy: function (energyUp) {
        if (this.energy >= 100) {
            return;
        } 
        
        this.energy + energyUp > 100 ? this.energy = 100 : this.energy += energyUp; 
    },
    loseLife: function () {
        this.lives--;
    },
    recoverLife: function () {
        if(this.lives >= 99){
            return;
        }
        this.lives++;
    }
}

player.name = 'IU';
player.loseLife(1);
player.loseEnergy(10); //90
player.loseEnergy(5); //85
player.loseEnergy(15); // 70
player.loseEnergy(20); //50
player.recoverEnergy(10); //60
player.loseEnergy(30); // 30
player.loseEnergy(40); // lose 1 life = 1 life
player.loseLife(); // 0 life
player.recoverLife(1) // 1 life
player.recoverLife(1) // 2 lives

console.log(`The player ${player.name} has ${player.energy} energy and ${player.lives} lives.`);  

