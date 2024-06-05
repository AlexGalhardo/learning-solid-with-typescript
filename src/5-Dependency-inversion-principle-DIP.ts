// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// Wrong: The class depends on a concrete implementation.
class LightBulbWrong {
    turnOn(): void {
        console.log("LightBulb on");
    }

    turnOff(): void {
        console.log("LightBulb off");
    }
}

class SwitchWrong {
    private lightBulb: LightBulbWrong;

    constructor(lightBulb: LightBulbWrong) {
        this.lightBulb = lightBulb;
    }

    operate(): void {
        this.lightBulb.turnOn();
    }
}

// Correct: The class depends on an abstraction.
interface Switchable {
    turnOn(): void;
    turnOff(): void;
}

class LightBulb implements Switchable {
    turnOn(): void {
        console.log("LightBulb on");
    }

    turnOff(): void {
        console.log("LightBulb off");
    }
}

class Switch {
    private device: Switchable;

    constructor(device: Switchable) {
        this.device = device;
    }

    operate(): void {
        this.device.turnOn();
    }
}
