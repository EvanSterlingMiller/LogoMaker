const inquirer = require('inquirer')
const fs = require('fs')
const sheapes = require('shapes.js')

const userInput = [
    { // user input for the SVG text
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for the SVG logo text',
        validate: function (input){
            return input.length <=3
        },
    },
    {//  user input of the text color
       type: 'input',
       name:  'colorText',
       message: 'What color do you want your logo text?',
    },
    {// user input for the shape of the logo
        type: 'list',
        name: 'shape',
        message: 'Select what shape you want your logo to be:',
        choices: ['triangle', 'circle', 'square']
    },
    {// user color selection
        type: 'input',
        name: 'colorShape',
        message: 'What color do you want your logo shape to be?',
    },
]


