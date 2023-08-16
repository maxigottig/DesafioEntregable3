const fs = require("fs");

class ProductManager {
  //defino el constructor
  constructor() {
    this.products = [];
    this.path = "Products.json";
    this.createFile();
  }
  //inicializo el Products.json con un metodo createFile()
  createFile() {
    if (!fs.existsSync(this.path)) {
      this.saveProductsInJSON();
    }
  }

  //Método addProduct
  addProduct(title, description, price, thumbnail, code, stock) {
    //valido que no se repita el campo "code."
    const noDupCode = this.products.some((prod) => prod.code === code);
    if (noDupCode) {
      console.error(`Error: product code "${code}" already exists`);
      return;
    }
    //valido que todos los campos sean obligatorios
    if (
      !title ||
      !description ||
      !price ||
      !thumbnail ||
      !code ||
      stock === undefined
    ) {
      console.error("All fields are mandatory.");
      return;
    }
    //Genero el ID
    let id = this.products.length + 1;
    //creo el producto
    const newProduct = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    //pusheo el array
    this.products.push(newProduct);
    //guardo como un array en el archivo Products.json
    this.saveProductsInJSON();
  }

  //Método getProducts
  getProducts() {
    this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    return this.products;
  }

  //Método getProductById
  getProductById(id) {
    const products = this.getProducts();
    return (
      products.find((prod) => prod.id === id) || console.error("Not found")
    );
  }

  deleteProduct(id) {
    this.products = this.getProducts();
    const product = this.getProductById(id);
    if (!product) {
      console.error(`The product id: ${id} does not exist`);
    } else {
      this.products = this.products.filter((prod) => prod.id !== product.id);
      this.saveProductsInJSON();
      console.log(`Product id: ${product.id} has been deleted`);
    }
  }

  updateProduct(id, product) {
    this.products = this.getProducts();
    let position = this.products.findIndex((prod) => prod.id === id);

    if (position === -1) {
      console.error(`The product id: ${id} does not exist`);
    } else {
      this.products[position].title = product.title;
      this.products[position].description = product.description;
      this.products[position].price = product.price;
      this.products[position].thumbnail = product.thumbnail;
      this.products[position].code = product.code;
      this.products[position].stock = product.stock;
      this.saveProductsInJSON();
      console.log("Product updated!");
    }
  }

  saveProductsInJSON() {
    fs.writeFileSync(this.path, JSON.stringify(this.products));
  }
}

module.exports = { ProductManager };