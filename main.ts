import * as rl from 'readline-sync';
import {ProductManager} from "./src/productManager";
import {Product} from "./src/product";
enum list {
    SHOWLIST = 1,
    ADDNEWPRODUCT ,
    UPDATE,
    DELETE,
    SEARCH
}

let productManager = new ProductManager();
let choice = -1;

function showListProduct() {
    console.log('---Hiển thị danh sách sản phẩm---');
    let products = productManager.showList();
    for (const product of products) {
        console.log(`Mã hàng: ${product.id}\tTên hàng: ${product.name}\tLoại hàng: ${product.sectors}\t
                Giá: ${product.price}\tSố lượng: ${product.amount}\tNgày tạo: ${product.dateCreated}\tMô tả: ${product.describe}`)
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
    return  new Product(name, sectors, price, amount, dateCreated, describe);

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
    } else {
        console.log('không có sản phẩm này')
    }
}

function searchProduct() {
    console.log('---Tìm kiếm thông tin sản phẩm---');
    let name = rl.question('Nhâp tên sản phẩm muốn tìm: ')
    let product = productManager.findProductByName(name);
    if (product) {
        console.log(product);
    } else {
        console.log('Không có sản phẩm này.')
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
        case list.SHOWLIST : {
            showListProduct();
            break;
        }
        case list.ADDNEWPRODUCT : {
           addProduct();
            break;
        }
        case list.UPDATE : {
            updateProduct();
            break;
        }
        case list.DELETE : {
            deleteProduct();
            break;
        }
        case list.SEARCH : {
            searchProduct();

            break;
        }
    }
}while (choice != 0);