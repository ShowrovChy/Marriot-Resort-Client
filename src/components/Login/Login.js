import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./Login.css";
import googleIcon from "../../images/icon/google.png";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login-container">
      <div className="form-wrapper">
        <div className="google-btn-wrapper">
          <Button className="google-btn">
            {" "}
            <img className="google-icon" src={googleIcon} alt="" />{" "}
            <h3 className="google-text">Google Log in</h3>
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} />
          <input {...register("email", { required: true })} />

          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
