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

if (deposito = parseInt(prompt("escolha a conta ")) ) {
    let valorDeposito = parseFloat(prompt("valor do deposito: "));
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        console.log("Valor ou conta de depósito inválido.");
        break;
    }

    if (contas[deposito]) {
        contas[deposito].depositar(valorDeposito);
        console.log("Depósito realizado com sucesso.");
    } else {
        console.log("erro no deposito, verifique a conta.");
        ;
    }
    break;
}

if (contaSaque = parseInt(prompt("escolha a conta ")) ) {
prompt("escolha a conta:");

let valorsaque =parseFloat(prompt("valor do saque: "));

if (isNaN(contaSaque) || contas[contaSaque] ) { 
    console.log("Conta de saque inválida.");
    break;
}} 
if (contas[contaSaque] && contas[contaSaque].sacar(valorsaque)) {
    console.log("Saque realizado com sucesso.");
}  

