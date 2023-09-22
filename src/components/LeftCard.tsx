import React from "react";
import icon from "../assets/imgs/Gitee.svg";
import { Introduce } from "./Introduce";


export const LeftCard = () => {
  return (
    <div className="insideBox insideLeft">
      <div className="insideLeftMiddle">
        <div className="insideLeftInner">
          <div>
            <div
              style={{
                display: "flex",
                lineHeight: "45px",
                padding: "0",
              }}
            >
              <img src={icon} alt="icon_gitee" style={{ height: "45px" }} />
            </div>
            <h2 className="leftTitle">企业级 DevOps 研发管理平台</h2>
          </div>
          <Introduce />
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop:"20px"
            }}
          >
            <div style={{position:'relative'}}>
              <a className="link_footer" href="https://gitee.com/enterprises?from=login" target="_blank">
                <span className="footer_gitee">Gitee 企业版 </span>
                <span style={{margin:"0 14px"}}>-</span>
                <span>企业级 DevOps 研发管理平台</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
