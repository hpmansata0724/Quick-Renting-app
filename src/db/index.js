const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database_name',
  password: 'your_password',
  port: 'your_port_number',
});

const addUser = async (userData) => {
  const { firstname, lastname, age, mobile, email, password } = userData;
  const query = {
    text: 'INSERT INTO Users(firstname, lastname, age, mobile, email, password) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [firstname, lastname, age, mobile, email, password],
  };
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addUser,
};
