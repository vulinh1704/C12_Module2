abstract class Hinh {
    dienTich: number;
    chuVi: number;
    abstract tinhChuVi(): number;

    hienThiHinh(): string {
        return 'Đây là hình'
    }
}
abstract class HinhTron extends Hinh{
 //Không bắt buộc phải triển khai abstract method của lớp cha
}


