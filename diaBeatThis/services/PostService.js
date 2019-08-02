import { db } from './db';

export const addPost =  (item) => {
    db.ref('/items').push({
        name: item
    });
}