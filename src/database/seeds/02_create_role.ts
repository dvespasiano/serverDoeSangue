import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('role').insert([
        { nmRole: 'admin' },
        { nmRole: 'user' },
    ]);
}