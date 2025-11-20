import React, { useState } from "react";
import FacultyForm from "./components/FacultyForm";
import FacultyList from "./components/FacultyList";
import FacultyProfile from "./components/FacultyProfile";
import "./App.css";

function App() {
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Add Faculty
  const addFaculty = (data) => {
    setFaculties([...faculties, { id: Date.now(), ...data }]);
  };

  // Delete Faculty
  const deleteFaculty = (id) => {
    setFaculties(faculties.filter((f) => f.id !== id));
  };

  // Show Profile
  const showProfile = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <div className="app-container">
      <h1>Faculty Management System</h1>

      <div className="main-box">
        <FacultyForm addFaculty={addFaculty} />

        <FacultyList
          faculties={faculties}
          deleteFaculty={deleteFaculty}
          showProfile={showProfile}
        />

        {selectedFaculty && (
          <FacultyProfile faculty={selectedFaculty} />
        )}
      </div>
    </div>
  );
}

export default App;
