export interface IManage<T> {
    add(t: T): void;
    edit(id: number, t : T): void;
    delete(id: number);
    findAll(): T[];
    findById(id: number): number;
}