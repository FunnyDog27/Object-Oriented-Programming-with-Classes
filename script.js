class Product {
  static productCount = 0;

  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    Product.productCount++;
  }
  