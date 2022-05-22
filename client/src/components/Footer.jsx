import React from "react";
import Loading from "./Loading";

function Footer({ isLoading, memory, cpuTime }) {
  console.log(memory);
  return (
    <div className="footer">
      <div className="footer-item">
        <div className="footer-sub-item">
          <Loading isLoading={isLoading} />
        </div>
        <div className="footer-sub-item">
          {memory ? `Memory : ${memory} B` : null}
        </div>
        <div className="footer-sub-item">
          {cpuTime ? `CPU Time : ${cpuTime} sec` : null}
        </div>
      </div>
      <a
        href="https://github.com/varun-jain12/react-online-compiler"
        target="_blank"
        rel="noreferrer"
        className="footer-item link"
      >
        <div className="footer-sub-item" style={{ display: "flex" }}>
          View source code on Github
          <div style={{ marginLeft: "10px" }}>
            <img
              src="github.png"
              alt="Github"
              width="15px"
              height="15px"
              style={{ marginTop: "2px" }}
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Footer;
