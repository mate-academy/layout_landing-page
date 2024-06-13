const { Client } = require('pg');

const client = new Client({
  user: 'your_username',
  host: 'localhost',
  database: 'testdb',
  password: 'your_password',
  port: 5432,
});

async function connectAndQuery() {
  try {
    await client.connect();

    await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

    const insertQuery = {
      text: 'INSERT INTO users(username, email) VALUES($1, $2) RETURNING *',
      values: ['john_doe', 'john@example.com'],
    };
    const insertedUser = await client.query(insertQuery);

    const updateQuery = {
      text: 'UPDATE users SET email = $1 WHERE username = $2 RETURNING *',
      values: ['new_email@example.com', 'john_doe'],
    };
    const updatedUser = await client.query(updateQuery);

    const deleteQuery = {
      text: 'DELETE FROM users WHERE username = $1 RETURNING *',
      values: ['john_doe'],
    };
    const deletedUser = await client.query(deleteQuery);

    const selectQuery = 'SELECT * FROM users';
    const allUsers = await client.query(selectQuery);
    console.log(allUsers.rows);
  } catch (err) {
    console.error('Error during database query execution:', err);
  } finally {
    await client.end();
  }
}

connectAndQuery();
