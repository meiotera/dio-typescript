import { Account } from "./Account";

export class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.deposit(value);
      console.log(`Empréstimo de R$${value.toFixed(2)} realizado.`);
    }
  };
}
