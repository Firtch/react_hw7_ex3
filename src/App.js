import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Content from "./Content";
import RecursiveButton from "./RecursiveButton";

function App() {
  const value = Math.random() > Math.random();

  // let part = null;
  // if (value) {
  //   part = <p>True</p>;
  // } else {
  //   <p>False</p>
  // }

  // return (
  //   <div>
  //    {value ? <p>True</p> : <p>False</p>}
  //   </div>
  // );

  const [showMode, setShowMode] = useState(true);
  const handlerClick = () => {
    setShowMode(!showMode);
  };

  let content = null;

  if (showMode) {
    content = (
      <Content />
    );
  }
  return (
    <div>
      <RecursiveButton />
      {/* <button onClick={handlerClick}>Show toggle</button>
      {content} */}
    </div>
  );
}

export default App;
