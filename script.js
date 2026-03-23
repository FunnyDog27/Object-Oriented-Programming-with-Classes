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