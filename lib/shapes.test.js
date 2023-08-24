const { Circle, Triangle, Square } = require("./shapes.js")

describe("Test Triangle", () => {
    test("color should match input", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
    test("color should match input", () => {
        const shape = new Triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />')
    })
})

describe("Test Circle", () => {
    test("color should match input", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="125" r="70" fill="blue" />')
    })
    test("color should match input", () => {
        const shape = new Circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<circle cx="150" cy="125" r="70" fill="purple" />')
    })
})

describe("Test Square", () => {
    test("color should match input", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="70" width="120" height="120" fill="blue" />')
    })
    test("color should match input", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="90" y="70" width="120" height="120" fill="purple" />')
    })
})
 