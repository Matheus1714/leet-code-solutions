# LeetCode Solutions

![alt text](.github/banner.png)

## Introduction

Hello! This is my repository containing solutions to problems from the [Leet Code](https://leetcode.com/) platform.

## Technologies

- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Prettier](https://prettier.io/)
- [EsLint](https://eslint.org/)

**[Dependences/package.json]**

```json
"devDependencies": {
    "@types/jest": "^29.5.12",
    "@typescript-eslint/eslint-plugin": "^7.0.1",
    "@typescript-eslint/parser": "^7.0.1",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "jest": "^29.7.0",
    "prettier": "^3.2.5",
    "ts-jest": "^29.1.2"
}
```

## Repository Structure

This repository has three different folders: `/easy`, `/medium`, and `/hard`. Each folder represents a different difficulty level as shown on [LeetCode](https://leetcode.com/).

In each folder, there are multiple files. Files with the format `myChallengeSolution.ts` contain my solution for the challenge, and files with the format `myChallengeSolution.test.ts` contain my test cases for the challenge.

## Running Problems

1. Install NPM dependences

```bash
npm i
```

2. Run all test cases

```
npm run test
```

## Scripts

This repository includes some scripts that can help you if you decide to fork or clone it.

```json
"scripts": {
    "test": "jest",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "format": "prettier --write ."
},
```

1. Run test cases

```bash
npm run test
```

2. Run ESLint for TypeScript

```bash
npm run lint
```

3. Run ESLint and fix problems

```bash
npm run lint:fix
```

4. Run to format all files

```bash
npm run format
```
