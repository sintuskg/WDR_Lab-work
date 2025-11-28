import pool from './db.js'

/* ================================
   FETCH ALL STUDENTS
================================ */
export async function fetchStudentsList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM student");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch data ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}


/* ================================
   INSERT STUDENT (CREATE)
================================ */
export async function registerStudent(req, res) {
    const { stdid, stdname, standard, age } = req.body;  // FIXED

    try {
        const [result] = await pool.query(
            "INSERT INTO student (stdid, stdname, standard, age) VALUES (?, ?, ?, ?)",
            [stdid, stdname, standard, age]
        );

        res.json({
            message: "Data inserted successfully",
            insertedId: result.insertId
        });
    } catch (err) {
        console.log("Unable to insert data ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}


/* ================================
   UPDATE STUDENT
================================ */
export async function updateStudent(req, res) {
    const { stdid, stdname, standard, age } = req.body;

    try {
        const [result] = await pool.query(
            "UPDATE student SET stdname = ?, standard = ?, age = ? WHERE stdid = ?",
            [stdname, standard, age, stdid]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student updated successfully" });

    } catch (err) {
        console.log("Unable to update data ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}


/* ================================
   DELETE STUDENT
================================ */
export async function deleteStudent(req, res) {
    const { stdid } = req.params; // DELETE using URL parameter :stdid

    try {
        const [result] = await pool.query(
            "DELETE FROM student WHERE stdid = ?",
            [stdid]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted successfully" });

    } catch (err) {
        console.log("Unable to delete data ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
