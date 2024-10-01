import mysql from "mysql2/promise";
// connect to the database
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
});

const fetchAllStaff = async () => {
  const [rows] = await connection.execute("SELECT * FROM staff");
  return rows;
};

const insertStaff = async (staff) => {
  const [rows] = await connection.execute(
    "INSERT INTO staff (name, email) VALUES (?, ?)",
    [staff.name, staff.email]
  );
  return rows;
};

const updateStaff = async (staff) => {
  const [rows] = await connection.execute(
    "UPDATE staff SET name = ?, email = ? WHERE id = ?",
    [staff.name, staff.email, staff.id]
  );
  return rows;
};

const deleteStaff = async (id) => {
  const [rows] = await connection.execute("DELETE FROM staff WHERE id = ?", [
    id,
  ]);
  return rows;
};

export { fetchAllStaff, insertStaff, updateStaff, deleteStaff };
