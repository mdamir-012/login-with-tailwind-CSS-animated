import React from "react";

const Login = () => {
  return (
    <div className=" bg-pink-200 px-10 py-20 rounded-xl border-2 border-gray-200">
      <h1 className=" text-5xl font-semibold">Welcome back</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4">
        Welcome Back! Please Enter your details.
      </p>
      <div className="mt-8">
        <div>
          <div>
            <label className="text-lg font-medium ">Email</label>
            <input type="text" placeholder="Enter Email" className=" w-full border-2 border-gray-100 p-4 mt-1 rounded-xl bg-transparent" />
          </div>
          <div>
            <label className="text-lg font-medium ">Password</label>
            <input type="text" placeholder="Enter Password" className=" w-full border-2 border-gray-100 p-4 mt-1 rounded-xl bg-transparent" />
          </div>
        </div>
        <div className=" flex text-center justify-between">
          <div>
            <input type="checkbox" id="remember" className=" cursor-pointer" />
            <label for="remember" className="text-base ml-2 font-medium">Remember for 30 days</label>
          </div>
          <button className="text-base text-violet-500 font-medium">Forgot password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
