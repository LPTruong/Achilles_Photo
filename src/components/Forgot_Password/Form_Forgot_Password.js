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
        name={["user", "email"]}
        rules={[{ type: "email", required: true }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default forgotPassword;
