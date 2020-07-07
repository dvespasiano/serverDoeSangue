
import knex from '../database/connection'
import { Request, Response, response } from 'express'

class RoleController {
    async getAll(request: Request, response: Response) {
        const roles = await knex('role').select('*');
        const serializedItems = roles.map(roles => {
            return {
                id: roles.id,
                nmRole: roles.nmRole,
            }
        })
        return response.json(serializedItems)
    }
}

export default RoleController;