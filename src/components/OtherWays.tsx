import React from "react";
import OSChina from "../assets/imgs/icon_OSChina.jpg";
import HW from "../assets/imgs/icon-huawei.png";
import Aliyun from "../assets/imgs/icon_Aliyun.png";
import Gitlab from "../assets/imgs/icon-gitlab.png";
import Github from "../assets/imgs/icon_github.png";
import rc from "../assets/imgs/r-c.png";

export const OtherWays=()=>{
    return (
        <div className="login_footer">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={OSChina}
              style={{
                width: "35px",
                height: "35px",
                display: "inline-block",
                borderRadius: "20px",
                marginRight: "15px",
              }}
              alt="OSChina_icon"
            />
            <p style={{ display: "inline-block" }}>使用 OSChina 账号登陆</p>
          </div>
          <div style={{ textAlign: "center", color: "#8c92a4" ,marginTop:"20px"}}>
            —————— 其他方式登陆 ——————
          </div>
          <div style={{display:'flex',justifyContent:"space-between",padding:"20px 10px",alignItems:"center"}}>
            <img src={Aliyun} alt="Aliyun_icon" style={{width:"40px",height:'25px',display:"inline-block"}} />
            <img src={Gitlab} alt="Gitlab_icon" className="login-footer-icons" />
            <img src={HW} alt="Huawei_icon" className="login-footer-icons" />
            <img src={Github} alt="Github_icon" className="login-footer-icons" />
            <img src={rc} alt="RC_icon" className="login-footer-icons" style={{borderRadius:"30px"}} />
          </div>
        </div>
    )
}