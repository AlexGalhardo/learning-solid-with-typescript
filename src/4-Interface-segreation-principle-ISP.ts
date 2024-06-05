// Clients should not be forced to rely on interfaces they do not use.

// Wrong: Large interface with methods that some classes don't need.
interface WorkerHuman {
    work(): void;
    eat(): void;
}

class HumanWorkerWrong implements WorkerHuman {
    work(): void {
        console.log("Working");
    }

    eat(): void {
        console.log("Eating");
    }
}

class RobotWorkerWrong implements WorkerHuman {
    work(): void {
        console.log("Working");
    }

    eat(): void {
        // Robots don't eat
    }
}

// Right: Specific interfaces for each functionality.
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class HumanWorker implements Workable, Eatable {
    work(): void {
        console.log("Working");
    }

    eat(): void {
        console.log("Eating");
    }
}

class RobotWorker implements Workable {
    work(): void {
        console.log("Working");
    }
}
