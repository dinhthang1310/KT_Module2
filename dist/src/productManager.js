"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    addNewProduct(product) {
        ProductManager.id++;
        product.id = ProductManager.id;
        ProductManager.productList.push(product);
    }
    showList() {
        return ProductManager.productList;
    }
    updateProduct(id, product) {
        let index = this.findProductById(id);
        if (index !== -1) {
            ProductManager.productList[index] = product;
            product.id = id;
        }
        else {
            console.log('không tìm thấy sản phẩm này');
        }
    }
    deleteProduct(name) {
        let index = -1;
        for (let i = 0; i < ProductManager.productList.length; i++) {
            if (ProductManager.productList[i].name == name) {
                index = i;
            }
        }
        if (index != -1) {
            ProductManager.productList.splice(index, 1);
            return true;
        }
        return false;
    }
    findProductById(id) {
        let index = -1;
        for (let i = 0; i < ProductManager.productList.length; i++) {
            if (ProductManager.productList[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
    findProductByName(name) {
        for (let product of ProductManager.productList) {
            if (product.name == name) {
                return product;
            }
        }
    }
}
exports.ProductManager = ProductManager;
ProductManager.id = 0;
ProductManager.productList = [];
