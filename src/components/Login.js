import React from "react";
import Header from "./Header";
import LoginBox from "./LoginBox";
import { background_logo } from "../Utils/constant";

export const Login = () => {
  return (
    <div>
      <Header />
      <LoginBox/>
      <div>
        <img
          src={background_logo}
          alt="background-logo"
        />
      </div>
    </div>
  );
};
