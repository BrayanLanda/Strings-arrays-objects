'use strict'

/*
Reto 3: Sistema de Gestión de Inventario

Desarrollar un sistema en JavaScript para gestionar un inventario de productos. Cada producto estará representado como un objeto con varias propiedades, y todos los productos se almacenarán en una colección (objeto o array).

Herramientas a Utilizar:

Métodos de arrays: push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), reduce(), sort(), entre otros.
Métodos de objetos: Object.keys(), Object.values(), Object.entries(), Object.assign()
Funcionalidades:

Creación de Productos:
Descripción: Permitir al usuario ingresar detalles de un producto, como nombre, precio, cantidad, y descripción, y almacenar estos detalles en un objeto.
Duplicacion de Productos:
Descripción: Permitir al usuario duplicar un producto existente.
Nota: La duplicacion de productos debe mantener un identificador único para cada producto, por lo que el identificador del producto duplicado debe ser diferente al original (recomendacion: el id debe ser el ultimo + 1). El nombre del producto debe tener un sufijo 'Copy' para indicar que es una copia. Por ejemplo:
Producto Original:
const product1 = {
    id: 1,
    name: 'Producto 1',
    price: 100,
    quantity: 10,
    description: 'Descripción del Producto 1'
}
Producto Duplicado:
const product2 = {
    id: 2,
    name: 'Producto 1 Copy',
    price: 100,
    quantity: 10,
    description: 'Descripción del Producto 1'
}
Si ya existe un producto con el sufijo 'Copy', el nuevo producto debe tener un sufijo 'Copy 2' y así sucesivamente.
Visualización y Búsqueda de Productos
Descripción: Permitir al usuario ver todos los productos almacenados y buscar productos por nombre y por precio.
Nota: La búsqueda de productos por precio debe permitir al usuario ingresar un rango de precios (precio mínimo y precio máximo) y mostrar todos los productos que se encuentren dentro de ese rango.
Actualización de Productos
Descripción: Permitir al usuario actualizar los detalles de un producto existente.
Nota: El usuario debe poder modificar cualquier campo del producto, incluido el nombre, precio, cantidad y descripción. Como modificar? Puedes utilizar el id del producto para buscarlo y luego actualizar sus propiedades de la siguiente manera mutando el objeto original:
const product = products.find(product => product.id === id);
product.name = 'Nuevo Nombre';
product.price = 200;
product.quantity = 20;
product.description = 'Nueva Descripción';
Eliminación de Productos
Descripción: Permitir al usuario eliminar un producto existente. Como eliminar? Puedes utilizar el id del producto para buscarlo y luego eliminarlo de la lista de productos de la siguiente manera:
products = products.filter(product => product.id !== id);
Verificación de Existencia de Productos e inventario
Descripción: Verificar si un producto existe en el inventario y si hay suficiente cantidad disponible para vender. Si el producto no existe o la cantidad disponible es insuficiente, mostrar un mensaje de error al usuario.
Nota: Utiliza some() para verificar si un producto existe y filter() para verificar si hay suficiente cantidad disponible.
Venta de Productos
Descripción: Permitir al usuario vender un producto y actualizar (restar) la cantidad disponible en el inventario.
Compra de Productos
Descripción: Permitir al usuario comprar un producto y actualizar (añadir) la cantidad disponible en el inventario.
Cálculo de Valor Total del Inventario
Descripción: Calcular el valor total del inventario sumando el precio de todos los productos disponibles.
Ordenamiento de Productos
Descripción: Permitir al usuario ordenar los productos por precio y cantidad de forma ascendente o descendente.
Nota: Utiliza sort() para ordenar los productos por nombre, precio, cantidad y descripción.
Identificacion de productos con posibles malas palabras en la descripción
Descripción: Identificar productos con posibles malas palabras en la descripción y haciendo una copia profunda del objeto con el Object.assign({}, product) crear una lista de nombre blacklistedProducts con los productos que contienen malas palabras en la descripción.
Lista de malas palabras: ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5']
Reporte General de Productos
Descripción: Generar un reporte de productos que incluya cantidad de productos, valor total del inventario, cantidad de productos más caros, cantidad de productos más baratos, cantidad de productos con mayor y menor cantidad disponible y cantidad de productos con posibles malas palabras en la descripción.
Importante! Recuerda que por experiencia de usuario, las malas palabras en la descripción de los productos deben ser reemplazadas por asteriscos (*) para evitar ofensas, asi que cada vez que encuentres una mala palabra en la descripción de un producto, reemplazala por asteriscos, de modo que en ningun servicio, a excepcion del reporte general, se muestren las malas palabras.

Nota: Puedes utilizar bucles for, while y estructuras condicionales como if/else para resolver este reto, pero te recomiendo que utilices métodos de strings y arrays para simplificar la solución.

*/

//Variables
const products = [];
const badWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];

//Function create new product
const createProduct = function(){
    const id = products.length>0 ? products[products.length - 1].id +1 : 1;
    const name = prompt('Enter product name: ');
    const price = parseFloat(prompt('Enter product price: '));
    const quantity = parseInt(prompt('Enter product quantity: '));
    const description = prompt('Enter product description: ');
    const product = {
        id, 
        name,
        price,
        quantity,
        description
    }
    products.push(product);
    console.log(`Product created: ${product}`);
}

//Function to duplicate an existing product
const duplicateProduct = function(){
    const idDuplicate = parseInt(prompt('Enter ID of the product to duplicate: '));
    const productDuplicate = products.find(product => product.id === idDuplicate);
    if(productDuplicate){
        const duplicateProduct = Object.assign({}, productDuplicate);
        duplicateProduct.id = products.length + 1;
        duplicateProduct.name += ' Copy';
        products.push(duplicateProduct);
        alert(`Product duplicate: ${duplicateProduct}`);
    }else{
        alert('Product does not exist ');
    }
}

//Function show all products
const showProducts = function(){
    console.log('All products');
    products.forEach(product => console.log(product));
}

//Function search product by name
const searchProductName = function(){
    const searchProduct = prompt('Enter the name of the product to search; ');
    const filterProduct = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
    console.log(filterProduct);
}

//Function search product by price
const searchProductPrice = function(){
    const minPrice = parseFloat(prompt('Enter the min price: '));
    const maxPrice = parseFloat(prompt('Enter the max price: '));
    const filterProduct = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    console.log(`Products found by price range: ${filterProduct}`);
}

//Function update product 
const updateProduct = function(){
    const idUpdate = parseInt(prompt('Enter the id of the product to update: '));
    const productUpdate = products.find(product => product.id === idUpdate);

    if(productUpdate){
        productUpdate.name = prompt('Enter new name of the product: ', productUpdate.name);
        productUpdate.price = parseFloat(prompt('Enter new price of the product: ', productUpdate.price));
        productUpdate.quantity = parseInt(prompt('Enter new quantity of the product', productUpdate.quantity));
        productUpdate.description = prompt('Enter new description of the product: ', productUpdate.description);
    }else{
        alert('Product not found'); 
    }
    console.log(productUpdate);
}

//Function delete an existinf product 
const deleteProduct = function(){
    const idDelete = parseInt(prompt('Enter the id of the product to delete: '));
    const indexDelete = products.findIndex(product => product.id === idDelete);
    if(indexDelete){
        products.splice(indexDelete, 1);
        console.log('Product deleted successfully');
    }else{
        console.log('Product not found');
    }
}

//Function to check if a product exists in inventory
const checkProductInventory = function(){
    const productName = prompt('Enter the name of the product to verefy');
    const productExists = products.some(product => product.name.toLowerCase() === productName.toLowerCase());
    if(productExists){
        alert('Product exits in the inventory');
    }else{
        alert('Sorry, Product not exist in the inventory');
    }
}

//Function to sell a product and update quantity
const sellProduct = function(){
    const idSell = parseInt(prompt('Enter the id of the product to sell'));
    const productSell = products.find(product => product.id === idSell);

    if(productSell){
        const quantitySell = parseInt('Enter the quantity to sell: ');
        if(quantitySell <= productSell.quantity){
            productSell.quantity -= quantitySell;
            alert(`Sale made, Remaining amount ${productSell.quantity}`);
        }else{
            alert('Insufficient quantity available');
        }
    }else{
        alert('Sorry, Product not exist in the inventory');
    }
}

//Function to buy a product and update quantity available
const buyProduct = function(){
    const idBuy = parseInt(prompt('Enter the id of the product to buy'));
    const productBuy = products.find(product => product.id === idBuy);
    if(productBuy){
        const quantityBuy = parseInt(prompt('Enter the quantity to buy'));
        productBuy.quantity += quantityBuy;
        alert(`Purchase made. New quantity available: ${productBuy.quantity}`);
    }else{
        alert('Sorry, Product not exist in the inventory');
    }
}

//Function calculate total inventory value
const calculateTotal = function(){
    const total = products.reduce((acu, product) => acu + (product.price * product.quantity) ,0);
    alert(`Value total of inventory: ${total}`);
}

//Function to order of products by price and available
const sortProducts = function(){
    const sortBy = prompt('Enter the field you want to order by (price/quantity)');
    const sortOrder = prompt('Enter the sort order (ascending/descending)')
    let sortedProducts;

    if(sortBy === 'price'){
        sortedProducts = products.slice().sort((a, b) => sortOrder === 'ascending' ? a.price - b.price : b.price - a.price);
    }else if(sortBy === 'quantity'){
        sortedProducts = products.slice().sort((a, b) => sortOrder === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity);
    }else{
        alert('Data invalid');
        return;
    }
    console.log(sortProducts);
}

const generalReport = function(){
    const totalProduct = products.length;
    const totalInventoryValue = products.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
    const mostExpensiveProducts = products.sort((a, b) => b.price - a.price).slice(0, 3);
    const cheapestProducts = products.sort((a, b) => a.price - b.price).slice(0, 3);
    const mostAvailableProducts = products.sort((a, b) => b.quantity - a.quantity).slice(0, 3);
    const leastAvailableProducts = products.sort((a, b) => a.quantity - b.quantity).slice(0, 3);
}

const main = function(){
    let option;
    do{
        option = parseInt(prompt(`Enter option:
                1. Add product
                2. Duplicate Product
                3. Show Products
                4. Search Product By Name
                5. Search Product By Price
                6. Update Product 
                7. Delete Product 
                8. Varify Product
                9. Sell Product
                10. Buy Product
                11. Calculate Product
                12. Order Product
                13. General Report
                0. Exit`));

        switch(option){
            case 1:
                createProduct();
                break;
            case 2:
                duplicateProduct();
                break;
            case 3:
                showProducts();
                break;
            case 4:
                searchProductName();
                break;
            case 5:
                searchProductPrice();
                break;
            case 6:
                updateProduct();
                break;
            case 7: 
                deleteProduct();
                break
            case 8: 
                checkProductInventory();
                break;
            case 9:
                sellProduct();
                break;
            case 10:
                buyProduct();
            case 11:
                calculateTotal();
            case 12: 
                sortProducts();
                break;
            case 13: 
                generalReport();
                break;
            case 0:
                alert('Thank you for your visit');
                break;
            default:
                alert('Option invalid');
        }
    }while(option !== 0)
}

main()
