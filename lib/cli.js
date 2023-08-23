const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require("./shapes.js")


function CLI() {
    inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "Select a shape:",
            choices: ["circle", "triangle", "square"]
        },

        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like the shape to be?"
        },

        {
            type: "input",
            name: "text",
            message: "What is the text (must be no more than 3 characters)?",
            validate: (response) => response.length <= 3 || "Can only be 3 characters or less!"
        },

        {
            type: "input",
            name: "textColor",
            message: "What color would you like the text to be?"
        }
    ]).then((shapeType, shapeColor, text, textColor) => {
        let newShape;
        switch (shapeType) {
            case "circle":
                newShape = new Circle();
                break;

            case "square":
                newShape = new Square();
                break;

            case "triangle":
                newShape = new Triangle();
                break;
            default:
                newShape = new Circle();
                break;
        }
        newShape.setColor(shapeColor)

        writeFile("logo.svg", generateSVG(newShape, text, textColor))
    })

function generateSVG(newShape, text, textColor) {
    return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${newShape.render()} <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}

}


module.exports = CLI