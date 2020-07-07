import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('tipoSanguineo', table => {
        table.increments('id').primary();
        table.string('nmTipoSanguineo').notNullable();
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('tipoSanguineo');
}