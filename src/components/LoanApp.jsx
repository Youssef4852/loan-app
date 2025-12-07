import React, { useState } from "react";
import "./LoanApp.css";
import Modal from "./modal";
import MyComponents from "./MyComponents";
import { loanFormContext } from "./context/loanFormInputs";

function LoanApp() {
  let [loadInputs, setLoadInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "More Than 2000$",
  });
  let [showModal, setShowModal] = useState(false);
  let [modalData, setModalData] = useState({
    title: "",
    class: "",
  });

  let btnIsDisabled =
    loadInputs.name !== "" &&
    loadInputs.phone !== "" &&
    loadInputs.age !== "" &&
    loadInputs.employee !== false &&
    loadInputs.salary !== "";

  function handleSubmitForm(e) {
    e.preventDefault();
    if (loadInputs.name.length < 2) {
      setModalData({
        title: "The Name Less Two Letters",
        class: "failed",
      });
    } else if (/(?=.*\d)/.test(loadInputs.name)) {
      setModalData({
        title: "The Name Include The Digit",
        class: "failed",
      });
    } else if (/(?=.\W)/.test(loadInputs.name)) {
      setModalData({
        title: "The Name Include The Symbol",
        class: "failed",
      });
    } else if (loadInputs.phone.length < 10 || loadInputs.phone.length > 12) {
      setModalData({
        title: "The Mobile Phone Format Is Failed",
        class: "failed",
      });
    } else if (loadInputs.age < 12 || loadInputs.age > 100) {
      setModalData({
        title: "The Age Not Supported (-12 or +100)",
        class: "failed",
      });
    } else {
      setModalData({
        title: "The Form Has Been Successfully",
        class: "valid",
      });
    }
    setShowModal(true);
  }

  function handleLoanAppClicked() {
    setShowModal(false);
  }

  function handleNameInputChange(value) {
    setLoadInputs({ ...loadInputs, name: value });
  }
  function handlePhoneInputChange(value) {
    setLoadInputs({ ...loadInputs, phone: value });
  }
  function handleAgeInputChange(value) {
    setLoadInputs({ ...loadInputs, age: value });
  }

  return (
    <>
      <div onClick={handleLoanAppClicked} className="loan-app">
        <form onSubmit={handleSubmitForm}>
          <h1>Loan App With React JS</h1>
          <hr />

          <div className="name">
            <loanFormContext.Provider value={{type: 'text', evnetInput: loadInputs.name, handleChange: handleNameInputChange, label: 'Name'}}>
              <MyComponents />
            </loanFormContext.Provider>
          </div>
          <div className="phone">
            <loanFormContext.Provider value={{type: 'number', label: 'Phone Number', evnetInput: loadInputs.phone, handleChange: handlePhoneInputChange}}>
              <MyComponents />
            </loanFormContext.Provider>
          </div>
          <div className="age">
            <loanFormContext.Provider value={{label: 'Age', evnetInput: loadInputs.age, handleChange: handleAgeInputChange, type: 'number'}}>
              <MyComponents />
            </loanFormContext.Provider>
          </div>

          <div className="check">
            <label htmlFor="check">Are Your An Employee?:</label>
            <input
              type="checkbox"
              id="check"
              checked={loadInputs.employee}
              onChange={(e) =>
                setLoadInputs({ ...loadInputs, employee: e.target.checked })
              }
            />
          </div>
          <div className="select">
            <label htmlFor="select">Salary:</label>
            <select
              id="select"
              value={loadInputs.salary}
              onChange={(e) =>
                setLoadInputs({ ...loadInputs, salary: e.target.value })
              }
            >
              <option value="More Than 10000$">More Than 10000$</option>
              <option value="More Than 2000$">More Than 2000$</option>
              <option value="More Than 500$">More Than 500$</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!btnIsDisabled}
            className={btnIsDisabled ? "valid" : ""}
          >
            Send
          </button>
        </form>
      </div>

      <Modal
        isClicked={showModal}
        title={modalData.title}
        className={modalData.class}
      />
    </>
  );
}

export default LoanApp;
