/**
 *
 * Instruções: NÃO modifique este arquivo.
 * Implemente o menu interativo em um arquivo separado (main.js).
 */

class Conta {
  /**
   * Classe base que representa uma conta bancária genérica.
   * Não deve ser instanciada diretamente pelo menu.
   */
  constructor(titular, saldoInicial = 0) {
    this._titular = titular;
    this._saldo = saldoInicial;
  }

  get titular() {
    return this._titular;
  }

  get saldo() {
    return this._saldo;
  }

  /**
   * Deposita um valor na conta.
   * Parâmetro valor - Deve ser positivo
   * Retorna true se o depósito foi realizado, false caso contrário
   */
  depositar(valor) {
    if (valor <= 0) return false;
    this._saldo += valor;
    return true;
  }

  /**
   * Saca um valor da conta.
   * Parâmetro valor - Deve ser positivo e não ultrapassar o saldo
   * Retorna true se o saque foi realizado, false caso contrário
   */
  sacar(valor) {
    if (valor <= 0 || valor > this._saldo) return false;
    this._saldo -= valor;
    return true;
  }

  /**
   * Transfere um valor desta conta para a conta de destino.
   * Utiliza os métodos sacar() e depositar() internamente.
   * Parâmetro valor - Valor a transferir
   * Parâmetro destino - Conta de destino
   * Retorna true se a transferência foi realizada, false caso contrário
   */
  transferir(valor, destino) {
    if (this.sacar(valor)) {
      destino.depositar(valor);
      return true;
    }
    return false;
  }

  get contaInfo() {
    return `Conta | Titular: ${this._titular} | Saldo: R$ ${this._saldo.toFixed(2)}`;
  }
}

class ContaPoupanca extends Conta {
  /**
   * Conta Poupança: herda de Conta e adiciona rendimento com taxa de juros.
   **/
  static taxa_rendimento = 0.005;
  constructor(titular, saldoInicial = 0) {
    super(titular, saldoInicial);
  }

  /**
   * Aplica o rendimento mensal ao saldo da conta.
   * Retorna valor dos juros aplicados
   */
  renderJuros() {
    const juros = this._saldo * ContaPoupanca.taxa_rendimento;
    this._saldo += juros;
    return juros;
  }

  get contaInfo() {
    return (
      `Conta Poupança | Titular: ${this._titular} | ` +
      `Saldo: R$ ${this._saldo.toFixed(2)} | ` +
      `Taxa: ${(ContaPoupanca.taxa_rendimento * 100).toFixed(1)}% ao mês.`
    );
  }
}

class ContaCorrente extends Conta {
  /**
   * Conta Corrente: herda de Conta e adiciona suporte a limite de crédito.
   */
  constructor(titular, saldoInicial = 0, limite = 500) {
    super(titular, saldoInicial);
    this._limite = limite;
  }

  /** Retorna o limite de crédito */
  get limite() {
    return this._limite;
  }

  /**
   * Sobrescreve sacar() para considerar o limite de crédito.
   * O saldo disponível para saque é: saldo + limite.
   * Retorna true se o saque foi realizado, false caso contrário
   */
  sacar(valor) {
    if (valor <= 0 || valor > this._saldo + this._limite) return false;
    this._saldo -= valor;
    return true;
  }

  get contaInfo() {
    return (
      `Conta Corrente | Titular: ${this._titular} | ` +
      `Saldo: R$ ${this._saldo.toFixed(2)} | ` +
      `Limite: R$ ${this._limite.toFixed(2)}`
    );
  }
}

module.exports = { Conta, ContaPoupanca, ContaCorrente };
