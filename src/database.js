import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'manuel00962',
    database: 'Intervensoft'
});

export default pool;