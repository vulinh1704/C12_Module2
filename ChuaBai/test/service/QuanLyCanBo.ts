import {IManage} from "./IManage";
import {CanBo} from "../model/CanBo";

export class QuanLyCanBo implements IManage<CanBo>{
    private canBos: CanBo[] = [];
    constructor() {
    }
    add(t: CanBo): void {
        this.canBos.push(t);
    }

    delete(id: number) {
    }

    edit(id: number, t: CanBo): void {
    }

    findAll(): CanBo[] {
        return this.canBos;
    }

    findById(id: number): number {
        return 0;
    }
}