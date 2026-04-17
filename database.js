const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
    createTable();
  }
});
function createTable() {
    const query = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    )
  `;
   
  db.query(query, (err) => {
      if (err) {
            console.error("Error creating table:", err);
        } else {
            console.log("Schools table ready");
        }
    });
}