"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let name = prompt('Nome:');
let num1 = prompt('Insira um valor:');
let num2 = prompt('Insira outro valor:');
const mult = num1 * num2;
console.log(`Olá: ${name}. O valor da multiplicação é: ${mult}`);
