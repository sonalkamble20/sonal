const con = require("./db_connect");

// Create the Job table if it doesn't exist
async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Job (
    JobID INT NOT NULL AUTO_INCREMENT,
    Jobname VARCHAR(255) NOT NULL,
    Description TEXT,
    UserID INT NOT NULL,
    PRIMARY KEY (JobID)
  );`
  await con.query(sql);
}
createTable();

// Get all jobs posted by a specific user
async function getAllJobsByUser(userId) {
  let sql = `SELECT * FROM Job WHERE UserID = ?`;
  return await con.query(sql, [userId]);
}

// Add a new job
async function addJob(job) {
  let sql = `INSERT INTO Job (Jobname, Description, UserID) VALUES (?, ?, ?)`;
  await con.query(sql, [job.jobname, job.description, job.userId]);
}

module.exports = {
  getAllJobsByUser,
  addJob
};
