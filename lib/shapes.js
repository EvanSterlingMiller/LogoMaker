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
        console.log("created triangle SVG logo")
        //literal to set the color, text, and text color of the triangle from the user input. 
        return ` 
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points= "160, 20 240, 180 60, 180" fill= "${this.colorShape}" />
            <text x="150" y= "150" font-size="50" text-anchor="middle" fill="${this.colorText}"> ${this.userText}</text>
        </svg>` 
    }
}
class Circle extends shape{ // circle class
    constructor(colorShape, colorText, userText) {
        super(colorShape, colorText, userText)
    }   
    render() {
        console.log("created circle SVG logo")
        return `
        <<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="80" fill="${this.colorShape}" />
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.colorText}">${this.userText}</text>
        </svg>`
    }
}
class Square { //square class
    constructor(colorShape, colorText, userText) {
        super(colorShape, colorText, userText)
    } 
    render() {
        console.log("created square SVG logo")
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill="${this.colorShape}" />
            <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.colorText}">${this.userText}</text>
        </svg>
        `
    }
}

module.exports = { //exports
    Triangle,
    Circle,
    Square
}