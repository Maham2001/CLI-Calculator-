#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let radarTitle = chalkAnimation.radar("Let's start the calculation");
    await sleep();
    radarTitle.stop();
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "number",
            name: "n1",
            message: "Enter first number:"
        },
        {
            type: "list",
            name: "operations",
            message: "Select the operator: \n",
            choices: ["Add'+'", "Multiply'*'", "Subtract'-'", "Divide'/'"]
        },
        {
            type: "number",
            name: "n2",
            message: "Enter second number:"
        }
    ])
        .then((answers) => {
        console.log(answers);
        let a = answers.n1;
        let b = answers.n2;
        if (answers.operations == "Add'+'") {
            console.log(`${a} + ${b} = ${a + b}`);
        }
        else if (answers.operations == "Multiply'*'") {
            console.log(`${a} * ${b} = ${a * b}`);
        }
        else if (answers.operations == "Subtract'-'") {
            console.log(`${a} - ${b} = ${a - b}`);
        }
        else if (answers.operations == "Divide'/'") {
            console.log(`${a} / ${b} = ${a / b}`);
        }
    });
}
//askQuestion();
async function againCal() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Want to continue? Yes or No?"
        });
    } while (again.restart == 'Yes' || again.restart == 'yes' || again.restart == 'YES');
}
againCal();
