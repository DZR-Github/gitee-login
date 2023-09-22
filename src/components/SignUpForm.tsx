import React, { useState } from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";

const test = (value: any, regExp: RegExp) => {
  if (regExp.test(value)) return true;
  return false;
};


const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: "#fe730080",
            hoverBorderColor: "rgb(181, 181, 181)",
            activeShadow: "none",
          },
          Checkbox: {
            colorPrimary: "#fe7300",
            colorBgBase: "#fe7300",
            colorPrimaryHover: "#fe7300",
          },
        },
      }}
    >
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="name"
          label=""
          validateDebounce={300}
          validateTrigger={["onChange","onBlur"]}
          rules={[
            {
              required: true,
              message: "姓名为必填项",
            },
            {
              validator: (_, value) => {
                if (!value) return Promise.reject();
              },
            },
          ]}
        >
          <Input className="signup-input-name" placeholder="姓名" />
        </Form.Item>

        <div style={{width:"100%"}}>
        <Form.Item style={{display:"inline-block",width:"40%"}}>
          {/* <Input
            className="signup-input-static"
            value="https://gitee.com/"
            disabled={true}
          /> */}
          <div className="signup-input-static">https://gitee.com/</div>
        </Form.Item>

        <Form.Item
        style={{display:"inline-block",width:"60%"}}
          name="location"
          validateTrigger={["onChange","onBlur"]}
          rules={[
            {
              required: true,
              message: "个人空间地址为必填项",
            },
            {
              validator: (_, value) => {
                if (!value) return Promise.reject();
                else return Promise.resolve();
              },
            },
          ]}
        >
          <Input className="signup-input-location" placeholder="个人空间地址" />
          
        </Form.Item>
        </div>

        <Form.Item
          name="phone"
          label=""
          validateDebounce={300}
          validateTrigger={["onChange","onBlur"]}
          rules={[
            {
              required: true,
              message: "手机号码为必填项",
            },
            {
              validator: (_, value) => {
                const regExp =
                  /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!value) return Promise.reject();
                if (value && !test(value, regExp))
                  return Promise.reject(
                    new Error("请输入正确的手机号码（支持澳门台湾）或邮箱")
                  );
              },
            },
          ]}
        >
          <Input className="signup-input-phone" placeholder="请输入电话号码" />
        </Form.Item>

        <Form.Item
          name="password"
          label=""
          validateDebounce={300}
          validateTrigger={["onChange","onBlur"]}
          rules={[
            {
              required: true,
              message: "密码为必填项",
            },
            {
              validator: (_, value) => {
                const regExp =
                  /^(?=.*[0-9])(?=.*[a-zA-Z!@_#$%^&*()-+=,.?]).{6,32}$/;
                if (!value) return Promise.reject();
                if (value && !test(value, regExp))
                  return Promise.reject(
                    new Error(
                      "密码必须包含数字，且必须包含字母或其它符号（!@_#$%^&*()-+=,.?）"
                    )
                  );
                if (value && test(value, regExp)) return Promise.resolve();
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="signup-input-password"
            placeholder="密码不少于6位"
          />
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
            我已阅读并同意{" "}
            <a className="link" href="">
              使用条款{" "}
            </a>
            及{" "}
            <a className="link" href="">
              非活跃账号处理规范
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button className="signup-btn" type="primary" htmlType="submit">
            立即注册
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default SignUpForm;
