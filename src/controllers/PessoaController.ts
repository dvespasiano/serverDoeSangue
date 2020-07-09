
import knex from '../database/connection'
import { Request, Response, response } from 'express'

class PessoaController {
    async getAll(request: Request, response: Response) {
        const pessoas = await knex('pessoa').select('*');
        const serializedItems = pessoas.map(pessoa => {
            return {
                id: pessoa.id,
                cpf: pessoa.cpf,
                nome: pessoa.nome,
                sobrenome: pessoa.sobrenome,
                email: pessoa.email,
                senha: pessoa.senha,
                tipoSanguineo_id: pessoa.tipoSanguineo_id,
                role: pessoa.role

            }
        })
        return response.json(serializedItems)
    }
}

export default PessoaController;