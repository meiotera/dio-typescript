export abstract class Account {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Depósito de R$${value.toFixed(2)} realizado.`);
      this.getBalance();
    }
  };

  public withdraw = (value: number): void => {
    if (!this.validateStatus()) {
      throw new Error("Conta inativa.");
    }

    if (value <= this.balance) {
      this.balance -= value;
      console.log(`Saque de R$${value.toFixed(2)} realizado.`);
      this.getBalance();
    } else {
      console.log("Saldo insuficiente.");
    }
  };

  public getBalance = (): number => {
    console.log(`Saldo atual de R$${this.balance.toFixed(2)}`);
    return this.balance;
  };

  public validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }
    throw new Error("Conta inválida.");
  };
}
