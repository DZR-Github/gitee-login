import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
} from "antd";

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 8 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 16 },
//   },
// };

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label=""
        rules={[
          {
            required: true,
            message: "姓名为必填项",
          },
        ]}
      >
        <Input className="signup-input-name" placeholder="姓名"/>
      </Form.Item>

      <Form.Item
        name="location"
        label=""
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "个人空间地址为必填项",
            whitespace: true,
          },
        ]}
      >
        <Input value="https://gitee.com/" disabled={true} className="signup-input-static" />
        <Input className="signup-input-location" placeholder="个人空间地址"/>
      </Form.Item>

      <Form.Item
        name="phone"
        label=""
        rules={[{ required: true, message: "手机号码为必填项" }]}
      >
          <Input className="signup-input-phone" placeholder="请输入电话号码"/>
      </Form.Item>

      <Form.Item
        name="password"
        label=""
        rules={[
          {
            required: true,
            message: "密码为必填项",
          },
        ]}
        hasFeedback
      >
        <Input.Password className="signup-input-password" placeholder="密码不少于6位"/>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("请阅读并同意我们的服务条款")),
          },
        ]}
      >
        <Checkbox>
          我已阅读并同意 <a className="link" href="">使用条款 </a>及 <a className="link" href="">非活跃账号处理规范</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button className="signup-btn" type="primary" htmlType="submit">
          立即注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
