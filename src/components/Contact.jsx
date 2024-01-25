import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contactbox">
        <form
          method="POST"
          action="https://formsubmit.co/3fcba17ce019626858ba99ef98dd6003"
        >
          <h2>
            Leave a message<span class="dot">.</span>
          </h2>
          <input
            type="text"
            name="name"
            class="input"
            placeholder="Your Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            class="input"
            placeholder="Your Email"
            autoComplete="off"
            // required
          />
          <textarea
            placeholder="Your Message"
            class="input"
            name="message"
            rows="10"
            autoComplete="off"
            required
          ></textarea>
          <button type="submit" class="btn btn-lg btn-dark btn-block">
            SEND
          </button>
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
        </form>
        <img alt="Send message" src="./contact_image2.png" />
      </div>
    </div>
  );
};

export default Contact;
