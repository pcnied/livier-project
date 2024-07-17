require("dotenv").config();

module.exports = {
    development: {
        dialect: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,

        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    },
    test: {
        dialect: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,

        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    },
    production: {
        dialect: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,

        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    },
};

