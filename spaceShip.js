// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed) {
        this.name = name,
        this.topSpeed = topSpeed
    }
    accelerate() {
        let {name, topSpeed} = this
        console.log(`${name} moving to ${topSpeed}mph`)
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

let spaceShip1 = new SpaceShip('Spacecruiser', 15000)
let spaceShip2 = new SpaceShip('Battleship', 16000)
spaceShip1.accelerate()
spaceShip2.accelerate()