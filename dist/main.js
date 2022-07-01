"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const productManager_1 = require("./src/productManager");
const product_1 = require("./src/product");
var list;
(function (list) {
    list[list["SHOWLIST"] = 1] = "SHOWLIST";
    list[list["ADDNEWPRODUCT"] = 2] = "ADDNEWPRODUCT";
    list[list["UPDATE"] = 3] = "UPDATE";
    list[list["DELETE"] = 4] = "DELETE";
    list[list["SEARCH"] = 5] = "SEARCH";
})(list || (list = {}));
let productManager = new productManager_1.ProductManager();
let choice = -1;
function showListProduct() {
    console.log('---Hiển thị danh sách sản phẩm---');
    let products = productManager.showList();
    for (const product of products) {
        console.log(`Mã hàng: ${product.id}\tTên hàng: ${product.name}\tLoại hàng: ${product.sectors}\t
                Giá: ${product.price}\tSố lượng: ${product.amount}\tNgày tạo: ${product.dateCreated}\tMô tả: ${product.describe}`);
    }
}
function inputProduct() {
    console.log('---Thêm một sản phẩm mới---');
    let name = rl.question('Nhập tên sản phẩm: ');
    let sectors = rl.question('Nhập loại hàng: ');
    let price = +rl.question('Nhập giá sản phẩm: ');
    let amount = +rl.question('Nhập số lượng: ');
    let dateCreated = rl.question('Nhập ngày tạo: ');
    let describe = rl.question('Nhập mô tả sản phẩm: ');
    return new product_1.Product(name, sectors, price, amount, dateCreated, describe);
}
function addProduct() {
    let product = inputProduct();
    productManager.addNewProduct(product);
}
function deleteProduct() {
    console.log('---Xoá thông tin sản phẩm---');
    let nameProduct = rl.question('Nhập tên sản phẩm muốn xoá: ');
    let product = productManager.findProductByName(nameProduct);
    if (product) {
        productManager.deleteProduct(nameProduct);
    }
    else {
        console.log('không có sản phẩm này');
    }
}
function searchProduct() {
    console.log('---Tìm kiếm thông tin sản phẩm---');
    let name = rl.question('Nhâp tên sản phẩm muốn tìm: ');
    let product = productManager.findProductByName(name);
    if (product) {
        console.log(product);
    }
    else {
        console.log('Không có sản phẩm này.');
    }
}
function updateProduct() {
    console.log('---Sửa thông tin sản phẩm---');
    let index = +rl.question('Nhập id sản phẩm muốn sửa: ');
    let products = inputProduct();
    productManager.updateProduct(index, products);
}
do {
    console.log('---Hệ thống quản lý hàng hoá---');
    console.log('1.Hiển thị danh sách sản phẩm');
    console.log('2.Thêm một sản phẩm mới');
    console.log('3.sửa thông tin sản phẩm');
    console.log('4.Xoá thông tin sản phẩm');
    console.log('5.Tìm kiếm thông tin sản phẩm');
    console.log('0.Thoát');
    choice = +rl.question('Nhập lựa chọn của bạn...');
    switch (choice) {
        case list.SHOWLIST: {
            showListProduct();
            break;
        }
        case list.ADDNEWPRODUCT: {
            addProduct();
            break;
        }
        case list.UPDATE: {
            updateProduct();
            break;
        }
        case list.DELETE: {
            deleteProduct();
            break;
        }
        case list.SEARCH: {
            searchProduct();
            break;
        }
    }
} while (choice != 0);
