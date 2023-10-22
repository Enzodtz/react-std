import React, { useState } from "react";
import Input from "./Input";
import Std from "./Std";

function App() {
  const [values, setValues] = useState(["1", "1", "1", "1"]);

  function changeValue(v: string, i: number) {
    console.log(v);
    let newValues = values.slice();
    newValues[i] = v;
    setValues(newValues);
  }

  function addItem() {
    setValues([...values, "1"]);
  }
  function removeItem() {
    let newValues = values.slice();
    newValues.pop();
    setValues(newValues);
  }

  return (
    <>
      {values.map((v, i) => {
        return <Input key={i} i={i} v={v} changeValue={changeValue} />;
      })}

      <div>
        <button type="button" onClick={addItem}>
          Add
        </button>
        <button type="button" onClick={removeItem}>
          Remove
        </button>
      </div>

      <Std values={values.map((v) => parseFloat(v))} />
      {/* <div>STD of mean: {calcStd(values)}</div> */}
    </>
  );
}

export default App;
