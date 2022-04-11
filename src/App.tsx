import React from "react";
import "./App.css";
import RadioButtonsGroup from "./components/RadioButton/RadioButtonsGroup";
import SingleSelect from "./components/SingleSelect/SingleSelectComponent";

function App() {
  return (
    <div className="App">
      <div style={{ margin: 24 }}>
        <SingleSelect />
      </div>
    </div>
  );
}

export default App;
