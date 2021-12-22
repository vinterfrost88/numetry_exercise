# Numetry Back-end Developer Exercise

## The Exercise

Numetry is an EdTech company that is built to help Teachers keep kids having fun learning.
Based on that we need to build an API for a Panel that Teachers can see and understand the student's progress and also create exercises based on the mini-games skills. To help us with this challenge we need to hire developers that must demonstrate an ability to read existing code and write new code using NodeJS, JS ES6+, Express, Typescript and SQL (PostGres) and NoSQL Db (MongoDB and Redis). For that reason, this exercise provides boilerplate code that you are expected to extend and utilize in your solution.

This is a pair programming exercise and there is no time limit. If you get stuck, ask for help! Software development is a collaborative process! We are there to help guide you as we come to a solution together.

## Set-up Instructions

- Make sure you have `npm > 5` and `node > 14` installed before starting
- Clone this project: `git clone `
- Open the project in VS Code
- Open the `project folder`.
- run in the command line: npm install
## The Goal

Having two different tables, games, and assignments table already created and with data populated.
Is necessary to make the relationship between these two tables and return an object with all the assignment and games information.
Consider that one Assignments can have many games related.

## Acceptance Criteria

1. Create the relationship between the two tables using the migration or pure SQL with TypeORM.
2. Insert, populate seed data to test the relationship.
3. Create the SQL to return the relationship data.
4. Create a TypeORM Entity to return the relationship data.
5. Explain:
5.1. Wow could we add authorization or route guards in some routes in the API?
5.2. How would we store sensitive data in the database?

## Installation

```bash
$ npm install
```

## Development 
```bash
$ npm run dev
```
## Create a local database
`'docker-compose -f docker-compose.yml up'`

## Migration commands
`ts-node ./node_modules/typeorm/cli.js migration:run`

## Run typeorm commands
`ts-node ./node_modules/typeorm/cli.js migration:create -n [new-table]`

## drop database
`ts-node ./node_modules/typeorm/cli.js schema:drop`

