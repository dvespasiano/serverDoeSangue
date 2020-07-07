import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('pessoa', table => {
        table.increments('id').primary();
        table.string('cpf').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.integer('tipoSanguineo_id').notNullable().references('id').inTable('tipoSanguineo');
        table.integer('role_id').notNullable().references('id').inTable('role');
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('pessoa');
}