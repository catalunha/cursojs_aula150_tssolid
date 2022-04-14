import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocol';
export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;
  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getIDN(): string {
    return `${this.cpf}`;
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  name: string;
  fantasia: string;
  cnpj: string;
  constructor(name: string, fantasia: string, cnpj: string) {
    this.name = name;
    this.fantasia = fantasia;
    this.cnpj = cnpj;
  }
  getName(): string {
    return `${this.name} ${this.fantasia}`;
  }
  getIDN(): string {
    return `${this.cnpj}`;
  }
}
