type CartItem = {
  name: string;
  price: number;
};
class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private cartIsOpen = true;
  // private cartIsOpen: 'open' | 'close' = 'open';
  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  total(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carro vazio');
      return;
    }
    this.cartIsOpen = false;
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }
  sendMessage(arg0: string) {
    console.log(`Msg: ${arg0}`);
  }
  clear() {
    console.log('Limpando carrinho');
    this._items.length = 0;
  }
  saveOrder() {
    console.log(`Pedido Salvo com ${this.total()}`);
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camisa', price: 10 });
shoppingCart.addItem({ name: 'Calça', price: 20 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
