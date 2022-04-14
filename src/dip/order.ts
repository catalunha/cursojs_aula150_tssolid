import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _cartIsOpen = true;
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customerOrder: CustomerOrder,
  ) {}

  get cartIsOpen(): boolean {
    return this._cartIsOpen;
  }
  set cartIsOpen(status: boolean) {
    this._cartIsOpen = status;
  }
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carro vazio');
      return;
    }
    this.cartIsOpen = false;
    this.messaging.sendMessage('Seu pedido foi recebido');
    this.persistency.saveOrder(this.cart.total());
    this.cart.clear();
    console.log(
      'O cliente é: ',
      this.customerOrder.getName(),
      this.customerOrder.getIDN(),
    );
  }
}
