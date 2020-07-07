import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('estoque').insert([
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 1 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 2 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 3 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 4 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 5 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 6 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 7 },
        { qtd: '50', qtdMinima: '30', tipoSanguineo_id: 8 },
    ]);
}