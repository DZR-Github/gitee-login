import React  from "react";
import OSChina from "../assets/imgs/icon_OSChina.jpg";
import HW from "../assets/imgs/icon-huawei.png";
import Aliyun from "../assets/imgs/icon_Aliyun.png";
import Gitlab from "../assets/imgs/icon-gitlab.png";
import Github from "../assets/imgs/icon_github.png";
import rc from "../assets/imgs/r-c.png";
import wb from "../assets/imgs/icon_weibo.png"
import qq from "../assets/imgs/icon-qq.png"
import windows from "../assets/imgs/icon_windows.png"
import wx from "../assets/imgs/icon_weixin.png"
import dd from "../assets/imgs/dingding.png"
import trust from "../assets/imgs/icon_trustie.png"
import {  Tooltip } from "antd";

const Tips = (
  <div className="inner_icons_container">
    <a href="https://gitee.com/auth/weibo">
      <img src={wb} alt="Gitlab_icon" className="login-footer-icons inner_icons" />
    </a>
    <a href="https://gitee.com/auth/qq_connect">
      <img src={qq} alt="Huawei_icon" className="login-footer-icons inner_icons" />
    </a>
    <a href="https://gitee.com/auth/windowslive">
      <img src={windows} alt="Github_icon" className="login-footer-icons inner_icons" />
    </a>
    <a href="https://gitee.com/auth/wechat">
      <img style={{borderRadius:'0'}} src={wx} alt="Gitlab_icon" className="login-footer-icons inner_icons" />
    </a>
    <a href="https://gitee.com/auth/dingding">
      <img src={dd} alt="Huawei_icon" className="login-footer-icons inner_icons" />
    </a>
    <a href="https://gitee.com/auth/trustie">
      <img src={trust} alt="Github_icon" className="login-footer-icons inner_icons" />
    </a>
  </div>
);


export const OtherWays = () => {
  
  return (
    <div className="login_footer">
      <div>
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            color: "#666666",
          }}
          href="https://gitee.com/auth/oschina"
        >
          <img
            src={OSChina}
            style={{
              width: "35px",
              height: "35px",
              display: "inline-block",
              borderRadius: "20px",
              marginRight: "15px",
              cursor: "pointer",
            }}
            alt="OSChina_icon"
          />
          <p style={{ display: "inline-block", cursor: "pointer" }}>
            使用 OSChina 账号登陆
          </p>
        </a>
      </div>
      <div style={{ textAlign: "center", color: "#8c92a4", marginTop: "20px" }}>
        —————— 其他方式登陆 ——————
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 10px",
          alignItems: "center",
        }}
      >
        <a href="https://gitee.com/auth/aliyun">
          <img
            src={Aliyun}
            alt="Aliyun_icon"
            style={{
              width: "40px",
              height: "25px",
              display: "inline-block",
              cursor: "pointer",
            }}
          />
        </a>
        <a href="https://gitee.com/auth/gitlab">
          <img src={Gitlab} alt="Gitlab_icon" className="login-footer-icons" />
        </a>
        <a href="https://gitee.com/auth/huawei">
          <img src={HW} alt="Huawei_icon" className="login-footer-icons" />
        </a>
        <a href="https://gitee.com/auth/github">
          <img src={Github} alt="Github_icon" className="login-footer-icons" />
        </a>

        <div style={{ position: "relative" }}>
          <Tooltip color="white" placement="left" title={Tips}>
            <img
              src={rc}
              alt="RC_icon"
              className="login-footer-icons"
              style={{ borderRadius: "30px" }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
