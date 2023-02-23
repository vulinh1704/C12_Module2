export interface IArrayList<T> {
    add(t: T): void;
    get(index: number);
    remove(): void
}