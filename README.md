<div align="center">
    <h1 align="center">Learning S.O.L.I.D Principles with TypeScript</h1>
</div>

## Introduction

- Repository to use as reference to learn and remember S.O.L.I.D. Principles.

## Resume S.O.L.I.D Principles
- Asking ChatGPT:
   - **"Explain to me in the simplest way possible, as if I were a 10-year-old child, the 5 principles of S.O.L.I.D in object-oriented programming."**

### S ingle Responsibility Principle

- Imagine that you have a toy that only does one thing, like a remote control car that only drives. This car only has to worry about driving well. In programming, a class should do one thing and do it well, just like the car.

### O pen/Closed Principle

- Think of a game of building blocks. You can add new blocks to create new things, but you don't need to break the blocks you've already built. In programming, this means that we can add new functionality without changing what's already working.

### L iskov Substitution Principle

- Imagine that you have a toy that can be replaced with another similar one without any problems, like swapping a toy car for a toy truck. In programming, this means that we can replace a class with another that does something similar, and everything should still work fine.

### I nterface Segregation Principle

- Think of a remote control that has many buttons, but you only use a few. It would be better to have smaller, specific remote controls for each thing. In programming, this means that it is better to have smaller, specific interfaces than one large, complex interface.

### D ependency Inversion Principle

- Imagine that instead of toys that need special parts to work, you have toys that can work with any common part. In programming, this means that classes should depend on abstractions (general ideas) rather than on specific, concrete things, so that it is easy to swap out parts.


## Run Examples

a. Install Bun: <https://bun.sh/docs/installation>

b. Clone repository
```bash
git clone git@github.com:AlexGalhardo/learning-solid-with-typescript.git
```

c. Enter repository
```bash
cd learning-solid-with-typescript/
```

1. S ingle Responsability Principle
```bash
bun run single-responsability
```

2. O pen-Closed Principle
```bash
bun run open-closed
```

3. L iskov Substitution Principle
```bash
bun run liskov-substitution
```

4. I nterface Segregation Principle
```bash
bun run interface-segregation
```

5. D ependency Inversion Principle
```bash
bun run dependency-inversion
```
