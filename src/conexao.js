const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_host,
        port: process.env.DB_port,
        user: process.env.DB_user,
        password: process.env.DB_password,
        database: process.env.DB_database,
        ssl: { rejectUnauthorized: false }

    },
});

module.exports = knex;