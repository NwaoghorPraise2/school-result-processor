import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('posts', (table) => {
        table.specificType('id', 'CHAR(16)').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });

}


export async function down(knex: Knex): Promise<void> {
}

