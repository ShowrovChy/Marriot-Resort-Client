import React from "react";
import axios from "axios";
import "./AddANewService.css";
import { useForm } from "react-hook-form";
const AddANewService = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/addResorts", data).then((result) => {
      if (result.data.insertedId) {
        alert("Successfully Event Added");
        reset();
      }
    });
  };
  return (
    <div className="add-resort-container">
      <h1> Booked here 415 times in the last 24 hours</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder=" resort name"
        />

        <input
          {...register("area", { required: true })}
          placeholder=" resort area "
        />
        <input
          {...register("booked", { required: true })}
          placeholder=" total booked "
        />
        <textarea
          className="mt-3"
          {...register("description", { required: true })}
          placeholder="about resort"
        />
        <input
          {...register("image", { required: true })}
          placeholder="resort image"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Add resort" />
      </form>
    </div>
  );
};

export default AddANewService;
