import React from "react";

const FacultyList = ({ faculties, deleteFaculty, showProfile }) => {
  return (
    <div className="list-box">
      <h2>Faculty List</h2>

      {faculties.length === 0 && <p>No faculty added yet.</p>}

      {faculties.map((faculty) => (
        <div key={faculty.id} className="faculty-card">
          <h3>{faculty.name}</h3>
          <p>Course: {faculty.course}</p>

          <div className="btn-group">
            <button onClick={() => showProfile(faculty)}>Profile</button>
            <button className="delete" onClick={() => deleteFaculty(faculty.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyList;
