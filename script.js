class Product {

  static productCount = 0;

  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    Product.productCount++;
  }
  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }

  static applyDiscount(products, discount) {
    for (let i = 0; i < products.length; i++) {
      products[i].price = products[i].price * (1 - discount);
    }
  }
}

class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    let total = 0;

    for (let i = 0; i < this.inventory.length; i++) {
      total += this.inventory[i].getTotalValue();
    }

    return total;
  }

  findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name.toLowerCase() === name.toLowerCase()) {
        return this.inventory[i];
      }
    }

    return null;
  }
}

// ------------------------
// Testing the system
// ------------------------

const apple = new Product("Banana", 2.50, 50);
const bread = new PerishableProduct("Bread", 3.20, 15, "2026-03-30");
const milk = new PerishableProduct("Milk", 4.50, 10, "2026-03-25");
const rice = new Product("Corn", 12.99, 20);
const eggs = new Product("Eggs", 5.99, 12);

const myStore = new Store();

myStore.addProduct(apple);
myStore.addProduct(bread);
myStore.addProduct(milk);
myStore.addProduct(rice);
myStore.addProduct(eggs);