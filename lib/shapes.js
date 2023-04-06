class Triangle { //triangle class
    constructor(userText, colorText, shape, colorShape) {
        this.userText = userText
        this.colorText = colorText
        this.colorShape = colorShape
    }
}
class Circle { // circle class
    constructor(color) {
        this.x = 40 // default values
        this.y = 40 //default values
        this.radius = 20 //default radius length
        this.color = color
    }
    render() {
        console.log("")
    }
}
class Square { //square class
    constructor(color) {
        this.x = 40 //default valuse
        this.y = 40 // default values
        this.side = 40 /// defaule side length
        this.color = color
    }
}

module.exports = { //exports
    Triangle,
    Circle,
    Square
}