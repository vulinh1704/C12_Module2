import {CanBo, GioiTinh} from "./CanBo";

export class NhanVien extends CanBo{
    private _congViec: string;

    constructor(hoTen: string, tuoi: number, gioiTinh: GioiTinh, diaChi: string, congViec: string) {
        super(hoTen, tuoi, gioiTinh, diaChi);
        this._congViec = congViec;
    }

    get congViec(): string {
        return this._congViec;
    }

    set congViec(value: string) {
        this._congViec = value;
    }
}