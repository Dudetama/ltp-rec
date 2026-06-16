const prompt = require('prompt-sync')();
const { ContaPoupanca, ContaCorrente } = require('./Contas.js')

let contas = [];
let opcao = "";


function mostrarContas() {

  if (contas.length === 0) {
    console.log("Nenhuma conta criada.");
    return false;
  }

  console.log("\n=== CONTAS ===");

  for (let i = 0; i < contas.length; i++) {
    console.log(`${i} - ${contas[i].titular}`);
  }

  return true;
}

while (opcao !== "0") {

  console.log(`
 SISTEMA BANCÁRIO 
1. Criar Conta Poupança
2. Criar Conta Corrente
3. Depositar
4. Sacar
5. Transferir
6. Ver Extrato
7. Aplicar rendimento
0. Sair
`);}

opcao = prompt("Escolha uma opção: ");