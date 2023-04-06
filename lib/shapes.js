class shape {
    constructor(colorShape, colorText, userText){
        this.colorShape = colorShape
        this.colorText = colorText
        this.userText = userText
        
    }
}

class Triangle extends shape{ //triangle class
    constructor(colorShape, colorText, userText) {
        super(colorShape, colorText, userText)
    }
    render () {
        console.log("created SVG logo")
        //literal to set the color, text, and text color of the triangle from the user input. 
        return ` 
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points= "150, 18 244, 182 56, 182" fill= "${this.colorShape}" />
            <text x="150" y= "150" font-size="50" text-anchor="middle" fill="${this.colorText}"> ${this.userText}</text>
        </svg>` 
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