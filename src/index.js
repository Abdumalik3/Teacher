import React, { useState } from "react";
import ReactDOM from "react-dom";
import  "./index.css";



function App() {
  /* eslint no-eval: 0 */

  const [value, setValue] = useState("");
  const calcButtons = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcButtons.push(
      <button
        onClick={(e) => {
          setValue(value + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-wrapper">
      <div className="show-input">
        <div className="input-center">
          {value}
        </div>
        </div>
      </div>
      <div className="btnWrapper">
      <div className="btns">{calcButtons}</div>
        <div className="btnMath">
        <div className="modifiers subgrid">
        {/* clear button */}

        <button className="mathbtn"onClick={() => setValue(value.substr(0, value.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button className="mathbtn"onClick={() => setValue("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button className="mathbtn"onClick={(e) => setValue(value + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button className="mathbtn"onClick={(e) => setValue(value + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button className="mathbtn"onClick={(e) => setValue(value + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button className="mathbtn"onClick={(e) => setValue(value + e.target.value)} value="/">
          {" "}
          /
        </button>
        <button
          onClick={(e) => {
            try {
              setValue(
                String(eval(value)).length > 3 &&
                  String(eval(value)).includes(".")
                  ? String(eval(value).toFixed(4))
                  : String(eval(value))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
        </div>
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
