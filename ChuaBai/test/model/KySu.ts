import {CanBo, GioiTinh} from "./CanBo";

export class KySu extends CanBo {
    private _nghanhDaoTao: string;

    constructor(hoTen: string, tuoi: number, gioiTinh: GioiTinh, diaChi: string, nghanhDaoTao: string) {
        super(hoTen, tuoi, gioiTinh, diaChi);
        this._nghanhDaoTao = nghanhDaoTao;
    }


    get nghanhDaoTao(): string {
        return this._nghanhDaoTao;
    }

    set nghanhDaoTao(value: string) {
        this._nghanhDaoTao = value;
    }
}