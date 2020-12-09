import { getInputClassName } from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import FormRegister from "../../components/Register/FormRegister";
import "../../components/Register/FormRegister.css";
const Register = () => {
  return (
    <div className="container">
      <FormRegister />
    </div>
  );
};
export default Register;
