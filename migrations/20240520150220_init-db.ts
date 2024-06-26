import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('posts', (table) => {
        table.specificType('id', 'CHAR(16)').primary().notNullable();
        table.string('slug').unique().notNullable();
        table.string('title').notNullable();
        table.text('content');
        table.timestamp('publishedAt').index();
        table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('posts');
}

