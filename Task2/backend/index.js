import express from "express";
import mysql from "mysql2";
import { config } from "dotenv";
import cors from "cors";
const app = express();
config();
const { NOSQL_HOST, USER, PASSWORD, DATABASE, PORT } = process.env;
const db = mysql.createConnection({
  host: NOSQL_HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

db.connect(function (error) {
  if (error) {
    console.log("Error Connecting to DB");
  } else {
    console.log("successfully Connected to DB");
  }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API IS RUNNING" });
});

app.post("/note/add", (req, res) => {
  try {
    const { title, description, date } = req.body;

    const insertQuery = `
    INSERT INTO note ( title, description, date)
    VALUES ( ?, ?, ?);
  `;

    db.query(insertQuery, [title, description, date], (error, results) => {
      if (error) {
        // console.error("Error inserting new note: ", error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to insert new note." });
      }
      return res
        .status(200)
        .json({ success: true, message: "New note added successfully." });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
});

app.delete("/note/:id", (req, res) => {
  try {
    const { id } = req.params;

    const deleteQuery = `
      DELETE FROM note WHERE id = ?;
    `;

    db.query(deleteQuery, [id], (error, results) => {
      if (error) {
        // console.error("Error deleting note: ", error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to delete note." });
      }

      if (results.affectedRows === 0) {
        return res
          .status(404)
          .json({ success: false, message: "note not found." });
      }

      return res
        .status(200)
        .json({ success: true, message: "note deleted successfully." });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
});

app.get("/notes", (req, res) => {
  try {
    const getQuery = "SELECT * FROM note";
    db.query(getQuery, (error, results) => {
      if (error) {
        // console.error("Error retrieving notes: ", error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to retrieve notes." });
      }
      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
});
app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
