import { Form, Input, InputNumber, Button } from "antd";
import Title from "antd/lib/skeleton/Title";
import React from "react";
import "./Form_Forgot_Password";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 20 },
};

const validateMessages = {
  required: "Email is required!",
  types: {
    email: "Email is not a valid email!",
  },
};

const forgotPassword = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h1> Forgot your password ?</h1>
      <h3>
        Please enter your email and we'll send you instructions on how to reset
        your password
      </h3>
      <br></br>
      <Form.Item
        className="form_email_forgot"
        name={["user", "email"]}
        rules={[{ type: "email", required: true }]}
      >
        <Input className="forgot_form_email" placeholder="Email" />
      </Form.Item>
      <div className="forgot_button">
        <button class="forgot_form_button">Submit</button>
      </div>
    </Form>
  );
};
export default forgotPassword;
