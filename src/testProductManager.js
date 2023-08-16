const { ProductManager } = require("./ProductManager");
//creo la instancia de "ProductManager"
const PM = new ProductManager();

//Llamo “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(
  "llamo “getProducts” recién creada la instancia, debe devolver un arreglo vacío []"
);
console.log(PM.getProducts());

//Llamo al método “addProduct” con los campos sugeridos:
console.log("Llamo al método “addProduct” con los campos sugeridos");
const camposTesting = [
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25,
];

PM.addProduct(...camposTesting);

//llamo al método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(
  "llamo al método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado"
);
console.log(PM.getProducts());

//llamo al método “addProduct” con los mismos campos de arriba,debe arrojar un error porque el código estará repetido.
console.log(
  "llamo al método “addProduct” con los mismos campos de arriba,debe arrojar un error porque el código estará repetido."
);
PM.addProduct(...camposTesting);

//creo otros productos para llenar el array
console.log("Creo otros productos para rellenar el array")
PM.addProduct("Camiseta de algodón", "Camiseta de manga corta, cómoda y transpirable", 19.99, "camiseta1.jpg", "CM-001", 50);
PM.addProduct("Libreta de notas", "Libreta con tapa dura y hojas en blanco", 8.49, "libreta1.jpg", "LB-001", 100);
PM.addProduct("Bolígrafo recargable", "Bolígrafo de tinta azul con cuerpo metálico", 4.5, "boligrafo1.jpg", "BG-001", 30);
PM.addProduct("Mochila resistente al agua", "Mochila espaciosa y duradera para uso diario", 35.75, "mochila1.jpg", "MC-001", 20);
console.log(PM.getProducts());

//evaluo getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(
  "Llamo al metodo getProductById y que muestre el procuto id:3"
);
console.log(PM.getProductById(3));

//busco un ID que no existe y devuelve el error 'Not Found'
console.log("Busco un ID que no existe y devuelve  el error 'Not Found'")
console.log(PM.getProductById(100));


//Llamo al método “updateProduct” y se intentará cambiar los campos de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
console.log("Llamo al método “updateProduct” sobre el id:4 y se intentará cambiar los campos de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.")
PM.updateProduct(4, {title:"Chaleco Puffer Ebruck Topo 4", description:"3 cuotas sin interes de $54.330ARS", price:58990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO 4", stock:18})
console.log("Muestro el producto actualizado con getProductById y demuestro que conserva su ID:")
console.log(PM.getProductById(4))

//Busco updatear un producto que no existe y debe arrojar un error
console.log("Busco updatear un producto que no existe y debe arrojar un error")
PM.updateProduct(100,{title:"Chaleco Puffer Ebruck Topo 4", description:"3 cuotas sin interes de $54.330ARS", price:58990, thumbnail:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"CHALECO 4", stock:18})

//Llamo al método “deleteProduct”, se evaluará que realmente se elimine el producto
console.log("Llamo al método “deleteProduct” sobre el id:2, se evaluará que realmente se elimine el producto")
PM.deleteProduct(2)
console.log("Muestro todos los productos que el ID 2 ya no se encuentra en el archivo")
console.log(PM.getProducts())

// Intento eliminar un producto que no existe y debe arrojar un error.
console.log("Intento eliminar un producto que no existe y debe arrojar un error.")
PM.deleteProduct(100)
