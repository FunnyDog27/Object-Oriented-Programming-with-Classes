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