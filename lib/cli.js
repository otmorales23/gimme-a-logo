const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./shapes.")


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
            message: "What is the text (must be no more than 3 characters)?"
        },

        {
            type: "input",
            name: "textColor",
            message: "What color would you like the text to be?"
        }
    ]).then((shapeType, shapeColor, text, textColor) => {
        let newShape;
        switch(shapeType) {
            case "circle":
                newShape = new Circle();
                break;

            case "square":
                newShape = new Square ();
                break;
                
            case "triangle":
                newShape = new Triangle();
                break;
            default:
                newShape = new Circle();
                break;
                        
        }
    })

}


module.exports = CLI