
import knex from '../database/connection'
import { Request, Response, response } from 'express'

class EstoqueController {
    async getAll(request: Request, response: Response) {
        const estoques = await knex('estoque').select('*');
        const serializedItems = estoques.map(estoque => {
            return {
                id: estoque.id,
                qtd: estoque.qtd,
                qtdMinima: estoque.qtdMinima,
                tipoSanguineo_id: estoque.tipoSanguineo_id
            }
        })
        return response.json(serializedItems)
    }
}

export default EstoqueController;