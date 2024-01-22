import db from '../models/index.js';

export default class GuestService {

    add(data) {
        const row = db.guest.create(data);
        console.log(data, row);
        return row;
    }

    getAll() {
        const rows = db.guest.findAll();

        return rows;
    }
}