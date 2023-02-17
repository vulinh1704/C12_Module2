import {NhanVien} from "./model/NhanVien";
import {CanBo} from "./model/CanBo";
import {QuanLyCanBo} from "./service/QuanLyCanBo";

// let nhanVien: NhanVien = new NhanVien('Linh', 12, 'Nam', 'Hà nội' , 'Quét rác');
// let quanLyCB: QuanLyCanBo = new QuanLyCanBo();
// quanLyCB.add(nhanVien);
// console.log(quanLyCB.findAll());
let quanLyCanBo = new QuanLyCanBo();
let input = require('readline-sync');

function showMainMenu() {
    let choice = -1;
    do {
        console.log(`
    1.Thêm mới
    2.Hiển thị tất cả
    3.Chỉnh sửa
    4.Tìm kiếm
    0.Thoát
    `)
        choice = +input.question('Enter your selection : ');
        switch (choice) {
            case 1:
                addCanBo();
                break;
            case 2:
                show();
                break;
            case 3:
                break;
            case 4:
                break;
        }
    } while (choice !== 0);
}

function addCanBo() {
    console.log('----- Menu thêm mới ------')
    let fullName = input.question('Enter FullName : ');
    let age = +input.question('Enter age : ');
    let sex = input.question('Enter sex : ');
    let address = input.question('Enter address : ');
    let job = input.question('Enter job : ');
    let nhanVien: NhanVien = new NhanVien(fullName, age, sex, address, job);
    quanLyCanBo.add(nhanVien);
    console.log('Thêm thành công !');
    showMainMenu();
}

function show(){
    console.log(quanLyCanBo.findAll());
    showMainMenu();
}

showMainMenu()


