// Each class should have a single responsibility.

// Wrong: The class is doing more than one thing.
class UserWrong {
    constructor(
        public name: string,
        public email: string,
    ) {}

    getUserName(): string {
        return this.name;
    }

    getUserEmail(): string {
        return this.email;
    }

    saveToDatabase() {
        // save database
    }
}

// Right: Separate responsibilities into different classes.
class User {
    constructor(
        public name: string,
        public email: string,
    ) {}

    getUserName(): string {
        return this.name;
    }

    getUserEmail(): string {
        return this.email;
    }
}

class UserRepository {
    saveToDatabase(user: User) {
        // save database
    }
}
