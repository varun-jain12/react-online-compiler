import React from "react";
import axios from "axios";

function Navbar({ Code, setCode, starterCode }) {
  function handleRun() {
    setCode((p) => ({ ...p, loading: true }));
    axios.post("/api/code/", Code).then((response) => {
      if (response.status === 200) {
        console.log(response.data.memory);
        setCode((p) => ({
          ...p,
          output: response.data.output,
          memory: response.data.memory,
          cpuTime: response.data.cpuTime,
          loading: false,
        }));
      } else {
        alert("Something went wrong..");
      }
    });
  }

  const languages = ["cpp", "python", "nodejs"];

  return (
    <div className="navbar">
      <div
        className="nav-brand"
        onClick={() => {
          window.location.reload();
        }}
      >
        {"< "}
        <strong>Online Compiler</strong>
        {" />"}
      </div>
      <div className="menu">
        <button onClick={handleRun} className="menu-item-button">
          Run Code
        </button>
        <div class="dropdown">
          <button class="dropbtn">{Code.language}</button>
          <div class="dropdown-content">
            {languages.map((language) => (
              <div
                key={language}
                onClick={() => {
                  setCode({
                    code: starterCode[`${language}`],
                    language: language,
                  });
                }}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
