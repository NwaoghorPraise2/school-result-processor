import {Knex} from 'knex';

const config: Knex.Config = {
    client: 'pg',
    connection: process.env.DATABASE_URl,
    migrations: {
        extension: 'ts'
    }
}

export default config; 