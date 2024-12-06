import { PeopleAccount } from "./class/PeoppleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount } from "./class/DioAccount";

const clienteDio: DioAccount = new DioAccount("cliente", 55);

clienteDio.deposit(50);
clienteDio.withdraw(20);
