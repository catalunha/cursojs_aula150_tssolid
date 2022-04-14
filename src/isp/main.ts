import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';
import { FiftyPercentDiscount, TenPercentDiscount } from './discount';
import { EnterpriseCustomer, IndividualCustomer } from './customer';
const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Ana',
  'Aninha...',
  '123.456.789-12',
);
const enterpriseCustomer = new EnterpriseCustomer(
  'Ana Empresas',
  'Anninha',
  '123.456.789-/0001-12',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
shoppingCart.addItem(new Product('Camisa', 10));
shoppingCart.addItem(new Product('Calça', 10));
console.log(shoppingCart.items);
console.log('total:', shoppingCart.total());
console.log('totalWithDiscount:' + shoppingCart.totalWithDiscount());
order.checkout();
