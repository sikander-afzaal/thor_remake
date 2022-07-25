import React, { useState } from "react";
import "./Modal.css";
import cross from "../../assets/cross.svg";
import logo from "../../assets/modal-logo.svg";
import bg from "../../assets/modal-bg.png";
import tick from "../../assets/check-mark.svg";
function Modal({ closeModal }) {
  const [login, setLogin] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);
  return (
    <>
      <div className="overlay-modal" onClick={() => closeModal(false)}></div>
      {confirmBox ? (
        <div className="confirm-box">
          <img
            onClick={() => closeModal(false)}
            src={cross}
            className="cross-modal"
            alt=""
          />
          <img src={tick} className="tick" alt="" />
          <h1>Please check your mailbox</h1>
        </div>
      ) : (
        <div className="modal">
          <img
            onClick={() => closeModal(false)}
            src={cross}
            className="cross-modal"
            alt=""
          />
          <div className="leftModal">
            <h2>
              Welcome to <br /> <span>Gods of Asgard</span>
            </h2>
            {login ? (
              <>
                <form>
                  <div className="input-row">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      closeModal(false);
                    }}
                    type="submit"
                    className="mint"
                  >
                    Log in
                  </button>
                  <h5>Forgot Password</h5>
                </form>
                <h6 className="login-h6">
                  Dont have account?{" "}
                  <span onClick={() => setLogin(false)}>Sign up</span>
                </h6>
              </>
            ) : (
              <>
                <form>
                  <div className="input-row">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" id="ConfirmPassword" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setConfirmBox(true);
                    }}
                    type="submit"
                    className="mint"
                  >
                    Sign Up
                  </button>
                </form>
                <h6 onClick={() => setLogin(true)}>Already a Member</h6>
              </>
            )}
          </div>
          <div className="rightModal">
            <img src={logo} alt="" className="modal-logo" />
            <img src={bg} className="bg-modal" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
