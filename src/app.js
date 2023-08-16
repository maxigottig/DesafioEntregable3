const express = require('express');
const ProductManager = require('./ProductManager'); // Asegúrate de que la ruta sea correcta
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

const productManager = new ProductManager(); // Crea una instancia de la clase ProductManager

app.use(express.json());

// Endpoint para obtener la lista de productos con un límite opcional
app.get('/products', (req, res) => {
  const limit = req.query.limit;
  const products = limit ? productManager.getProducts(parseInt(limit)) : productManager.getAllProducts();
  res.json({ products });
});

// Endpoint para obtener un producto por su pid
app.get('/products/:pid', (req, res) => {
  const pid = req.params.pid;
  const product = productManager.getProductById(pid);
  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});