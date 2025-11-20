import React from "react";

const FacultyProfile = ({ faculty }) => {
  return (
    <div className="profile-box">
      <h2>Faculty Profile</h2>

      <p><strong>Name:</strong> {faculty.name}</p>
      <p><strong>Age:</strong> {faculty.age}</p>
      <p><strong>Course:</strong> {faculty.course}</p>
      <p><strong>Branch:</strong> {faculty.branch}</p>
    </div>
  );
};

export default FacultyProfile;
