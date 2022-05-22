import React from "react";
import Editor from "@monaco-editor/react";

function InputCode({ input, setCode }) {
  function handleChange(e) {
    setCode((p) => ({ ...p, input: e }));
  }

  return (
    <div className="input">
      <div className="file-name">input.txt</div>
      <Editor
        height="35vh"
        width="35vw"
        theme="vs-dark"
        onChange={handleChange}
        value={input || ""}
        defaultLanguage="text/plain"
      />
    </div>
  );
}

export default InputCode;
