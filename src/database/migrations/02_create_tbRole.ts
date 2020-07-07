import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('role', table => {
        table.increments('id').primary();
        table.string('nmRole').notNullable();
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('role');
}