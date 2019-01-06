import { createConnection } from "mysql";

const db = createConnection({
  host: "localhost",
  user: "test",
  password: "secret",
  database: "test-db"
});

db.connect();

export default db;