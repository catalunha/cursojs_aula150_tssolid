import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camisa', 10));
shoppingCart.addItem(new Product('Calça', 10));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
