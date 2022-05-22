import React from "react";
import Editor from "@monaco-editor/react";
import OutputCode from "./OutputCode";
import InputCode from "./InputCode";

function MainCodeArea({ Code, setCode }) {
  function handleChange(e) {
    setCode((p) => ({ ...p, code: e }));
  }
  return (
    <div className="editor">
      <div>
        <div className="file-name">{`${
          Code.language === "nodejs"
            ? "index.js"
            : Code.language === "python"
            ? "main.py"
            : "main.cpp"
        }`}</div>
        <Editor
          height="78vh"
          width="60vw"
          theme="vs-dark"
          path={Code.language}
          defaultLanguage={
            Code.language === "nodejs" ? "javascript" : Code.language
          }
          defaultValue={Code.code}
          onChange={handleChange}
        />
      </div>

      <div className="text-files">
        <InputCode input={Code.input} setCode={setCode} />
        <OutputCode output={Code.output} />
      </div>
    </div>
  );
}

export default MainCodeArea;
