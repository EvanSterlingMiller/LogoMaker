const inquirer = require('inquirer')
const fs = require('fs')
const sheapes = require('shapes.js')

const userInput = [
    { // user input for the SVG text
        type: 'input',
        name: 'SVG text',
        message: 'Enter up to 3 characters for the SVG logo text',
        validate: function (input){
            return input.length <=3
        },
    },
    {
        
    }
]