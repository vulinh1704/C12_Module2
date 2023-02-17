import {CanBo, GioiTinh} from "./CanBo";
type CapBac = 1 | 2 | 3 | 4 | 5
export class CongNhan extends CanBo {
    private _capBac: CapBac;

    constructor(hoTen: string, tuoi: number, gioiTinh: GioiTinh, diaChi: string, capBac: CapBac) {
        super(hoTen, tuoi, gioiTinh, diaChi);
        this._capBac = capBac;
    }

    get capBac(): CapBac {
        return this._capBac;
    }

    set capBac(value: CapBac) {
        this._capBac = value;
    }
}