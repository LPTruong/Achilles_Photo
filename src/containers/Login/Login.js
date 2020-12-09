import React, { useEffect, useState } from "react";
import "../../components/Login/FormLogin.css";

import FormLogin from "../../components/Login/FormLogin";
import FormRegister from "../../components/Register/FormRegister";

import useLogin from "../../hooks/login";

const Login = () => {
  //   const { isRegisterd, setIsRegisterd, afadf } = useLogin();

  return (
    <div className="container">
      <FormLogin />
      {/* {isRegisterd ? <FormLogin /> : <FormRegister />} */}
    </div>
  );
};

export default Login;
