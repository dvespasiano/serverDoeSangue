import Knex = require('knex');

export async function up(knex: Knex) {
    return knex.schema.createTable('estoque', table => {
        table.increments('id').primary();
        table.decimal('qtd').notNullable();
        table.decimal('qtdMinima').notNullable();
        table.integer('tipoSanguineo_id').notNullable().references('id').inTable('tipoSanguineo');
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('estoque');
}