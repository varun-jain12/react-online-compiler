import Editor from "@monaco-editor/react";
import React from "react";

function OutputCode({ output }) {
  const para = {
    readOnly: true,
  };
  return (
    <div className="output">
      <div className="file-name">output.txt</div>
      <Editor
        height="35vh"
        width="35vw"
        theme="vs-dark"
        defaultLanguage="text/plain"
        value={output || ""}
        options={para}
      />
    </div>
  );
}

export default OutputCode;
