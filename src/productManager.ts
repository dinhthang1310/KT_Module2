import {Product} from "./product";

export class ProductManager {
    private static id : number = 0;
    private static productList : Product[] = [];

    addNewProduct(product : Product) {
        ProductManager.id++
        product.id = ProductManager.id;
        ProductManager.productList.push(product);
    }
    showList() {
        return ProductManager.productList;
    }
    updateProduct(id : number,product : Product) {
        let index = this.findProductById(id);
        if (index !== -1) {
            ProductManager.productList[index] = product;
            product.id = id
        }else {
            console.log('không tìm thấy sản phẩm này')
        }

    }
    deleteProduct(name : string) {
        let index = -1;
       for (let i = 0;i < ProductManager.productList.length;i++) {
           if (ProductManager.productList[i].name == name) {
               index = i;
           }
       }if (index != -1) {
           ProductManager.productList.splice(index,1);
           return true;
        }
       return false;
    }
    findProductById(id : number) {
        let index = -1;
        for (let i = 0;i < ProductManager.productList.length;i++) {
            if (ProductManager.productList[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
    findProductByName(name : string) {
        for (let product of ProductManager.productList) {
            if (product.name == name ) {
                return product;
            }
        }
    }
}