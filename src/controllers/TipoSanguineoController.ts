
import knex from '../database/connection'
import { Request, Response, response } from 'express'
import ControllerBase from './ControllerBase';

class TipoSanguineoController {
    contBase = new ControllerBase();
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
    async getAll(request: Request, response: Response) {
        return this.contBase.buscaTudoBancoDados('tipoSanguineo');
    }
}

export default TipoSanguineoController;