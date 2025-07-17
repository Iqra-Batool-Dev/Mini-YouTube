import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {login as storeLogin} from '../../reduxSlices/authSlice'
import { Input, Logo, Button } from "../index";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import LoginWithGoogleBtn from "../LoginWithGoogleBtn";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if(userData){
        const userInfo = await authService.getCurrentUser();
        if (userInfo) {
          dispatch(storeLogin(userInfo));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (

    <div className=" w-[100%]  px-6 py-6  md:w-96  flex flex-col items-center gap-2 border-1 border-gray-200 bg-gray-100 rounded-3xl shadow-lg  ">
    <div>
        <Logo />
      </div>
      <h1 className=" text-black text-[1.6rem] font-medium mb-4">Create an account</h1>
      <p className=" text-[1rem] mb-2">
        Already have an account?&nbsp;
        <Link
          to="/login"
          className=" font-medium text-primary transition-all duration-200 hover:underline text-blue-600"
        >
          Sign In
        </Link>
      </p>
      {error && <p className=" text-red-500 text-center mb-1">{error}</p>}
      <form className="w-[100%]" onSubmit={handleSubmit(signup)}>
        <div className=" space-y-5">
          <Input
              label="Full Name"
              placeholder="Enter your full name "
              {...register("name", {
                required: true,
              })}
            />
          <Input 
            label="Email"
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              validation: {
                matchPattern: (value) =>
                  /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                  "Email address must be valid address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: true,
              validation: {
                matchPattern: (value) =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                    value
                  ) || "your password is invalid",
              },
            })}
          />
          <Button type="submit" className="w-full p-2 bg-amber-700">
            Sign Up
          </Button>
        </div>
      </form>
      <hr className="flex-1 border-t-1 border-gray-400" />
      <span className="text-[0.9rem] text-gray-400 md:text-gray-500">or</span>
      <hr className="flex-1 border-t-1 border-gray-400" />
      <LoginWithGoogleBtn/>
    </div>
  );
}
export default Signup;

