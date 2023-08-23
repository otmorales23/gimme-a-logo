const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');



function CLI () {
    inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "Select a shape:",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "text",
            message: "What is the text (must be no more than 3 characters)?"
        },
        {
            type: "input",
            name: "text",
            message: "What color would you like the text to be?"
        }


    ]).then((response) => {
        console.log(response);
    })
    
}


module.exports = CLI