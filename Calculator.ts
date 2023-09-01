import inquirer from "inquirer"

import{Addition} from "./Addition.js";
import{Subtraction} from "./Subtraction.js";
import{Multiplication} from "./Multiplication.js";
import{Division} from "./Division.js";
import { clearScreenDown } from "readline";

let answer = await inquirer.prompt

([
    {
        name: "num1",
        type: "number",
        message: "Please Enter Your First Number:"

},
    {
        name: "Operator",
        type: "list",
        choices: ["+","-","*","/"],
        message: "Please Select Your Operator:"       
},
    {
        name: "num2",
        type: "number",
        message: "Please Enter Your Second Number:"     
    },
]);

if(answer.Operator === "+")
{
    console.log(`The Sum of Two Numbers is = ${answer.num1 + answer.num2}`)
}
else if(answer.Operator === "-")
{
    console.log(`The Sum of Two Numbers is = ${answer.num1 - answer.num2}`)
}
else if(answer.Operator === "*")
{
    console.log(`The Sum of Two Numbers is = ${answer.num1 * answer.num2}`)
}
else if(answer.Operator === "/")
{
    console.log(`The Sum of Two Numbers is = ${answer.num1 / answer.num2}`)
}

console.log(answer)

