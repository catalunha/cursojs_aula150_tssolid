import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
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

  clear() {
    console.log('Limpando carrinho');
    this._items.length = 0;
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
