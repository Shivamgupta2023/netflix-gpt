import React from "react";
import Header from "./Header";
import LoginBox from "./LoginBox";
import { background_logo } from "../Utils/constant";

export const Login = () => {
  return (
    <div className="w-screen h-full">
      <Header />
      <LoginBox/>
      <div>
        <img
          className="fixed -z-10 h-screen w-screen object-cover"
          src={background_logo}
          alt="background-logo"
        />
      </div>
    </div>
  );
};
