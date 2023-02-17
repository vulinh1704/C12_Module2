export type GioiTinh = 'Nam' | 'Nữ' | 'Khác';
export class CanBo {
    private _hoTen: string;
    private _tuoi: number;
    private _gioiTinh: GioiTinh;
    private _diaChi: string;

    constructor(hoTen: string, tuoi: number, gioiTinh: GioiTinh, diaChi: string) {
        this._hoTen = hoTen;
        this._tuoi = tuoi;
        this._gioiTinh = gioiTinh;
        this._diaChi = diaChi;
    }

    get hoTen(): string {
        return this._hoTen;
    }

    set hoTen(value: string) {
        this._hoTen = value;
    }

    get tuoi(): number {
        return this._tuoi;
    }

    set tuoi(value: number) {
        this._tuoi = value;
    }

    get gioiTinh(): GioiTinh {
        return this._gioiTinh;
    }

    set gioiTinh(value: GioiTinh) {
        this._gioiTinh = value;
    }

    get diaChi(): string {
        return this._diaChi;
    }

    set diaChi(value: string) {
        this._diaChi = value;
    }
}