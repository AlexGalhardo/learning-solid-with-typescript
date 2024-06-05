// Objects must be substitutable for their subtypes without changing the behavior of the program.

// Wrong: Subclass changes superclass behavior.
class BirdWrong {
    fly(): void {
        console.log("Flying");
    }
}

class PenguinWrong extends BirdWrong {
    fly(): void {
        throw new Error("Penguins can't fly");
    }
}

// Correct: Subclass maintains the expected behavior of the superclass.
abstract class Bird {
    abstract move(): void;
}

class Sparrow extends Bird {
    move(): void {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    move(): void {
        console.log("Swimming");
    }
}
