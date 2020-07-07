
import knex from '../database/connection';

class ControllerBase {
    async buscaTudoBancoDados(tabela) {
        return await knex(tabela).select('*');
    }
    async findById(tabela, id) {
        return await knex(tabela).select('*').where(id = id);
    }
    async delete(tabela, id) {
        return await knex(tabela).delete(id);
    }
    async post(tabela, objeto) {
        return await knex(tabela).insert(objeto);
    }
    async put(tabela, objeto) {
        return await knex(tabela).update(objeto);
    }
}

export default ControllerBase;