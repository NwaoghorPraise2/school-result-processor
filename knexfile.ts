import { Knex } from 'knex';

const config: Knex.Config = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        extension: 'ts'
    }
    // pool: {
    //     min: 2,
    //     max: 10
    // },
    // debug: true
}

console.log('Database URL:', process.env.DATABASE_URL); // Log the database URL for debugging

export default config;