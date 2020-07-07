import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('tipoSanguineo').insert([
        { nmTipoSanguineo: 'A+' },
        { nmTipoSanguineo: 'A-' },
        { nmTipoSanguineo: 'B+' },
        { nmTipoSanguineo: 'B-' },
        { nmTipoSanguineo: 'AB+' },
        { nmTipoSanguineo: 'AB-' },
        { nmTipoSanguineo: 'O+' },
        { nmTipoSanguineo: 'O-' },
    ]);
}