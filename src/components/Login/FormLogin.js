import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./FormLogin";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authServices } from "../../services";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onFinish = () => {
    authServices
      .login()
      .then((res) => authServices.setAccessToken(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={username}
          onChange={handleOnChangeUsername}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleOnChangePassword}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgot_password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <button type="primary" htmlType="submit" class="login-form-button">
          Log in
        </button>
        Or <a href="/register"> register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
