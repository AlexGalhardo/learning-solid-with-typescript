// Software should be open for extension, but closed for modification.

// Wrong: We need to modify the class to add new functionality.
class RectangleWrong {
    constructor(
        public width: number,
        public height: number,
    ) {}

    area(): number {
        return this.width * this.height;
    }
}

class AreaCalculatorWrong {
    calculateArea(shape: any): number {
        if (shape instanceof Rectangle) {
            return shape.area();
        }
        return 0;
    }
}

// Right: We added new functionality without modifying existing code.
interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    constructor(
        public width: number,
        public height: number,
    ) {}

    area(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(public radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class AreaCalculator {
    calculateArea(shape: Shape): number {
        return shape.area();
    }
}
