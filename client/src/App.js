import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainCodeArea from "./components/MainCode";
import Navbar from "./components/Navbar";

function App() {
  const starterCode = {
    cpp: '#include<iostream>\nusing namespace std;\n\nint main()\n{\n\tcout<<"Hello world!";\n\treturn 0;\n}',

    python: "print('Hello World!')",
    nodejs: "console.log('Hello World!');",
  };
  const [Code, setCode] = useState({
    language: "cpp",
    code: starterCode["cpp"],
    output: "",
    loading: false,
  });

  return (
    <div className="App-header">
      <Navbar Code={Code} setCode={setCode} starterCode={starterCode} />
      <MainCodeArea Code={Code} setCode={setCode} />
      <Footer
        isLoading={Code.loading}
        memory={Code.memory}
        cpuTime={Code.cpuTime}
      />
    </div>
  );
}

export default App;
