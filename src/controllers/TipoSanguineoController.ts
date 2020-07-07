
import knex from '../database/connection'
import { Request, Response, response } from 'express'

class TipoSanguineoController {
    async post(request: Request, respons: Response) {
        const {
            nmTipoSanguineo,
        } = request.body;
        const trx = await knex.transaction();
        const tpSanguineo = {
            nmTipoSanguineo,
        }
        await trx('tipoSanguineo').insert(tpSanguineo)
        await trx.commit();
        return response.json(tpSanguineo);
    }
}

export default TipoSanguineoController;