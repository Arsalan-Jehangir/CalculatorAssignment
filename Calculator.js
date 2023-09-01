import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Please Enter Your First Number:"
    },
    {
        name: "Operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Please Select Your Operator:"
    },
    {
        name: "num2",
        type: "number",
        message: "Please Enter Your Second Number:"
    },
]);
if (answer.Operator === "+") {
    console.log(`The Sum of Two Numbers is = ${answer.num1 + answer.num2}`);
}
else if (answer.Operator === "-") {
    console.log(`The Sum of Two Numbers is = ${answer.num1 - answer.num2}`);
}
else if (answer.Operator === "*") {
    console.log(`The Sum of Two Numbers is = ${answer.num1 * answer.num2}`);
}
else if (answer.Operator === "/") {
    console.log(`The Sum of Two Numbers is = ${answer.num1 / answer.num2}`);
}
console.log(answer);
