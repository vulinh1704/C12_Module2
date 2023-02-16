class Shape {
    private _color: string;
    private _name: string;

    constructor(color: string, name: string) {
        this._color = color;
        this._name = name;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

class Triangle {
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(side1: number, side2: number, side3: number) {
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }

    checkPerimeter(): boolean {
        return (this._side3 + this._side2 > this._side1)
            && (this._side3 + this._side1 > this._side2)
            && (this._side2 + this._side1 > this._side3)
    }

    getPerimeter(): number {
        if (this.checkPerimeter()) {
            return this._side3 + this._side2 + this._side1;
        }
        return -1;
    }

    getArea(): number {
        if (this.checkPerimeter()) {
            let p = this.getPerimeter() / 2;
            return Math.sqrt(p * (p - this._side1) * (p - this._side2) * (p - this._side3));
        }
        return -1;
    }
}

let triangle: Triangle = new Triangle(1,1,1);
console.log(triangle.getArea());
console.log(triangle.getPerimeter())