import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(total: number) {
    console.log(`Pedido Salvo com ${total}`);
  }
}
