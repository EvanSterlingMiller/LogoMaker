const {Triangle, Circle, Square} = require("../lib/shapes")

describe("Triangle", () => {
    test("This should pass with a triangle created by the user inputs", () => {
        const shapes =  new Triangle("Orange", "Red", "ABC")
        const testShape = shapes.render()
        const sampleShape = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points= "160, 20 240, 180 60, 180" fill= "Orange" />
            <text x="150" y= "150" font-size="50" text-anchor="middle" fill="Red"> ABC</text>
        </svg>`
        expect(testShape).toEqual(sampleShape)
    })
    
})

describe("Circle", () => {
    test("This shoule pass with a circle created by user inputs", () => {
        const shapes = new Circle("Green", "Yellow", "DEF")
        const testShape = shapes.render()
        const sampleShape =`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="80" fill="Green" />
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="Yellow">DEF</text>
        </svg>`
        expect(testShape).toEqual(sampleShape)
    })
})
describe("Square", () => {
    test("This should pass with a square created by user inputs", () => {
        const shapes = new Square("Purple", "Blue", "GHI")
        const testShape = shapes.render()
        const sampleShape =`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill="purple" />
            <text x="100" y="125" font-size="50" text-anchor="middle" fill="blue">GHI</text>
        </svg>`
        expect(testShape).toEqual(sampleShape)
    })
})