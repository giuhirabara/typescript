import PromptSync, * as promptSync from 'prompt-sync'

const prompt = PromptSync();

let name = prompt('Nome:');
let num1: any = prompt('Insira um valor:');
let num2: any = prompt('Insira outro valor:');

const mult = num1 * num2;

console.log(`Olá: ${name}. O valor da multiplicação é: ${mult}`)