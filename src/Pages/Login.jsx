import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [currentstate, setcurrentstate] = useState("Login");
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
    
  } = useForm();

  const navigate = useNavigate();

  const delay =  (d)=>{
     return new Promise((resolve , reject )=>{
      setTimeout(() => {
        resolve()
      }, d);
     })
  }

  const onsubmit = async (data) =>{
    await delay(1000)
    toast.success("Logged In Successfully")
    navigate("/") 
    // console.log(data)
  }

  return (
    
    <form
      onSubmit={handleSubmit(onsubmit)}
      className={`flex flex-col border  bg-slate-100 shadow-lg ${isSubmitting ? "pt-8 pb-5" : ""} p-12 pt-0  items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800`}>
        {isSubmitting && <h1 className="text-3xl text-zinc-500">Loading ...</h1>}
      <div className="flex items-center gap-2 mb-2 mt-10">
        <p className="text-5xl linear">{currentstate}</p>
        <hr className="border-none h-[2px] w-8 bg-gray-800" />
      </div>
      {currentstate === "Login" ? (
        ""
      ) : (
        <input
          {...register("name", { required: true, minLength: 6 })}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )}
      <input
        {...register("email", { required: true, minLength: 5 })}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true, minLength: 5 })}
        type={"password"}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password</p>
        {currentstate === "Login" ? (
          <p
            onClick={() => setcurrentstate("Sign up")}
            className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p
            onClick={() => setcurrentstate("Login")}
            className="cursor-pointer">
            Login here
          </p>
        )}
      </div>
      <button
        type="submit"
        className="px-7 mt-3 py-2 bg-black text-sm text-white rounded">
        {currentstate === "login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
