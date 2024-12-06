import { Account } from "./Account";

export class DioAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (value <= 0) {
      throw new Error("O valor do depósito deve ser maior que zero.");
    }
    if (this["status"]) {
      const bonus = 10;
      this.balance += value + bonus;

      console.log(
        `Depósito com bônus de R$10 realizado. Valor total depositado: R$${
          value + bonus
        }`
      );
    } else {
      throw new Error("A conta não está ativa.");
    }
  };
}
