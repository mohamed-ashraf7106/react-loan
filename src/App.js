import "./App.css";
import { useState } from "react";
function App() {
  let [form, setform] = useState({
    Name: "",
    Number: "",
    Age: "",
    Employed: false,
    Salary: "999",
  });
  let arr = { ...form };
  let [send,setsend] = useState(false);
  function validate(array) {
    let error = document.querySelector(".error");
    setform(arr);
    error.innerHTML = "";
    setsend(false);
    if (array.Name.length < 4) {
      error.innerHTML = "<h3>Name must be at least 4 chars</h3>";
    }
    if (array.Number.length !== 11) {
      error.innerHTML += "<h3>Number must be 11 Numbers</h3>";
    }
    if (array.Age > 100 || array.Age < 18) {
      error.innerHTML += "<h3>Age must be at least 18 and max 100</h3>";
    }
    if (error.innerHTML === "") {
      setsend(true);
    }
  }
  return (
    <div className="App">
      <div className="Loan">
        <div
          className="error displayNone"
          onClick={() => {
            let target = document.querySelector(".error");
            target.classList.add("displayNone");
            target.innerHTML = "";
          }}
        ></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>Requesting a Loan</h2>
          <h4>Name</h4>
          <input
            onChange={(e) => {
              arr.Name = e.target.value;
              validate(arr);
            }}
          />
          <h4>Phone number</h4>
          <input
            type="number"
            onChange={(e) => {
              arr.Number = e.target.value;
              validate(arr);
            }}
          />
          <h4>Age</h4>
          <input
            type="number"
            onChange={(e) => {
              arr.Age = e.target.value;
              validate(arr);
            }}
          />
          <h4>Are you an employee?</h4>
          <input
            type="checkbox"
            onChange={(e) => {
              arr.Employed = e.target.checked;
              setform(arr);
            }}
          />
          <h4>Salary</h4>
          <select
            onChange={(e) => {
              arr.Salary = e.target.value;
              setform(arr);
            }}
          >
            <option value="999">less than 1000$</option>
            <option value="1999">less than 2000$</option>
            <option value="2000">more than 2000$</option>
          </select>
          <button
            className={`${send? "" : "disabled"}`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              let error = document.querySelector(".error");
              validate(arr);
              if (send === true) {
                console.log(form);
                error.innerHTML="<h3>the request has been submited</h3>";
                error.style.cssText = "color:green"
                error.classList.remove("displayNone");
              } else {
                error.style.cssText = "color:red"
                error.classList.remove("displayNone");
              }
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
