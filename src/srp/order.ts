import { ShoppingCart } from './shopping-cart';
import { Messaging } from './messaging';
import { Persistency } from './persistency';

export class Order {
  private _cartIsOpen = true;
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
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
  }
}
