import React from "react";

const Header = () => {
  return (
    <header>
      {/* <img src="image3.png" /> */}
      <div className="note">
        <h1>
          Hello<span className="dot">.</span>
          <br />I am Aman<span className="dot">.</span>
        </h1>
      </div>
      <div className="note2">
        <h6>I'm a full stack developer.</h6>
      </div>
    </header>
  );
};

export default Header;
