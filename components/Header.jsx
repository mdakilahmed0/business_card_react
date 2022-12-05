import React from "react";

export default function Header() {
  return (
    <div className="container">
      <img className="profile--pic" src="../images/photo.png"></img>
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <small>laurasmith.com</small>
      <div className="buttons">
        <button className="email--btn">Email</button>
        <button className="linkedin--btn">
            Linkedin</button>
      </div>
    </div>
  );
}
