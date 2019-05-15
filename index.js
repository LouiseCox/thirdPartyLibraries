//Imported thirdparty libraries
const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');

//Questions to ask user
const questions = [
    { type: 'input', name: 'name', message: 'What is your name?' },
];

inquirer
    .prompt(questions)
    .then(function (answers) {	
			
		//User name display using figlet and chalk
		figlet(answers.name, function(err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			console.log(chalk.blue(data))
		});		
		
    })