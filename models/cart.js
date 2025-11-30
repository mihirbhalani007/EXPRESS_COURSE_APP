const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id) {
        let cart = { products: [], totalPrice: 0 };
        fs.readFileSync(p, (err, fileContent) => {
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProduct = cart.products.find((prod) => prod.id === id);
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
            } else {
                updatedProduct = { id: id, qty: 1 };
            }
        });
    }
};
