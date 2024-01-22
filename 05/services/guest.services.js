import { GuestDetailDto, GuestDto } from '../dto/guest.dto.js';
import db from '../models/index.js';


export default class GuestService {

    async add(data) {
        const people = await db.Guest.create(data);
        return new GuestDetailDto(people);
    }

    async getAll() {
        const people = await db.Guest.findAll();
        console.log(people);
        return people.map((person) => new GuestDto(person));
    }

    async getById(id) {
        return await db.Guest.findById(id, {
            attributes : {
                exlude : ["birthdate"]
            }
        });
    }

    async delete(id) {
        return await db.Guest.destroy({
            where: { id }
        });
    }
    
    async update(id, data) {
        const row = db.Guest.update(data, {
            where: { id }
        });

        if(row === 1) await this.getById(id);

        /** for postgresql */
        // return [nbRows, resp] = db.Guest.update(data, {
        //     where: { id },
        //     returning: true
        // });
    }
}