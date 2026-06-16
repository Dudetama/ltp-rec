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

switch (opcao) {
    case "1!":

    let nomePoupança = prompt("Digite o nome do titular da conta poupança: ");

    let saldopoupança = parseFloat(prompt("saldo inicial: "));

    if (isNaN(saldopoupança)) {
        console.log ("saldo invalido")}
    break};

    contas.push(new ContaPoupanca(nomePoupança, saldopoupança));

    console.log("Conta poupança criada");
    break;

    

    let nomeCorrente = prompt(" titular da conta: ");

    let saldoCorrente = parseFloat(prompt("saldo inicial: "));

    let limite = parseFloat(prompt("limite: ")); 

    if (isNaN(saldoCorrente) || 
    isNaN(limite)) {
        console.log ("saldo ou limite invalido")}
        break;

    contas.push(new ContaCorrente(nomeCorrente, saldoCorrente, limite));

    console.log("Conta corrente criada");
    break;

if (mostrarContas()) break;