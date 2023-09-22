import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input ,ConfigProvider} from "antd";



export const LoginForm:React.FC = () => {
    const onFinish = (values: any) => {
      console.log("Received values of form: ", values);
    };
  
    return (
      <ConfigProvider
      theme={{
        components:{
          Input:{
            activeBorderColor:"#fe730080",
            hoverBorderColor:"rgb(181, 181, 181)",activeShadow:"none"
          },
          Checkbox:{
            colorPrimary:"#fe7300",
            colorBgBase:"#fe7300",
            colorPrimaryHover:'#fe7300'
          }
        }
      }}
      >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          validateTrigger={["onChange","onBlur"]}
          rules={[
            { 
            required: true, 
            message: "用户名为必填项" 
          }
        ]}
        >
          <Input className="login-input-phone"
            placeholder="手机 / 邮箱 / 个人空间地址"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: false, message: "" }]}
        >
          <Input
          className="login-input-password"
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"-20px"}}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a  className="login-message link" href="">
            短信验证登陆
          </a>
          </div>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          <a className="login-forgot" href="">已有账号，忘记密码？</a>
        </Form.Item>
      </Form>
      </ConfigProvider>
    );
  };
