import Ask from "https://deno.land/x/ask/mod.ts"

let ask = new Ask();

const answers = await ask.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'Name:'
    },
    {
        name: 'age',
        type: 'number',
        message: 'Age'
    }
]);

console.log(answers)