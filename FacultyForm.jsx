import React from "react";
import { useForm } from "react-hook-form";

const FacultyForm = ({ addFaculty }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addFaculty(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Register Faculty</h2>

      <input type="text" placeholder="Name" {...register("name")} required />

      <input type="number" placeholder="Age" {...register("age")} required />

      <input type="text" placeholder="Course" {...register("course")} required />

      <input type="text" placeholder="Branch" {...register("branch")} required />

      <button type="submit">Add Faculty</button>
    </form>
  );
};

export default FacultyForm;
