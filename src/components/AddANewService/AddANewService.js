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
    axios
      .post("https://powerful-headland-87669.herokuapp.com/addResorts", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Successfully Event Added");
          reset();
        }
      });
  };
  window.scroll(0, 0);
  return (
    <div className="add-resort-container">
      <h1 className="text-center text-warning service-heading">
        Add the latest Services
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="service-form-wrapper">
        <input
          {...register("name", { required: true })}
          placeholder=" resort name"
          className="border-0 field"
        />

        <input
          {...register("area", { required: true })}
          placeholder=" resort area "
          className="border-0 field"
        />

        <input
          {...register("duration", { required: true })}
          placeholder=" package duration "
          className="border-0 field"
        />

        <input
          {...register("cost", { required: true })}
          placeholder=" package cost "
          className="border-0 field"
        />
        <input
          {...register("booked", { required: true })}
          placeholder=" total booked "
          className="border-0 field"
        />
        <input
          {...register("bookingCode", { required: true })}
          placeholder="add booking code"
          className="border-0 field"
        />
        <textarea
          className="mt-3 border-0 field textArea"
          {...register("description", { required: true })}
          placeholder="about resort"
        />
        <input
          {...register("image", { required: true })}
          placeholder="resort image"
          className="border-0 field"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Add resort" className="border-0 field" />
      </form>
    </div>
  );
};

export default AddANewService;
