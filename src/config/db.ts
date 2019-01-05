import { createConnection } from 'mysql';

export const db = createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'secret',
  database : 'test-db'
});
