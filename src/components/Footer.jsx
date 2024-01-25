import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Icon name="fas fa-envelope" link="mailto:amanvijayverma07@gmail.com" />
        <Icon
          name="fab fa-linkedin-in"
          link="https://www.linkedin.com/in/aman-verma-26a5881a9"
        />
        <Icon name="fab fa-github" link="https://github.com/champacked" />
      </div>
      {/* <br /> */}
      <div class="info">
        <p>© Aman Verma {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
