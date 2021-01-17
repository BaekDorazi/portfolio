import React, { Component } from "react";

import WorkspaceHwky from "components/Illustrations/WorkspaceHwky";
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div class="contact">
          <div id="container">
            <h2>contact</h2>
            <form action="#" method="post" id="contact_form">
              <div class="name">
                <label for="name"></label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  id="name_input"
                  required
                />
              </div>
              <div class="email">
                <label for="email"></label>
                <input
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="email_input"
                  required
                />
              </div>
              <div class="subject">
                <label for="subject"></label>
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  id="subject_input"
                  required
                />
              </div>
              <div class="message">
                <label for="message"></label>
                <textarea
                  name="message"
                  placeholder="message"
                  id="message_input"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div class="submit">
                <input type="submit" value="submit" id="form_button" />
              </div>
            </form>
          </div>
        </div>

        <div className="image-area">
          <ul>
            <li>
              <div class="image">
                <WorkspaceHwky />
              </div>
              <div class="shadow"></div>
            </li>
          </ul>

          <div className="stats">
            <div>
              <a href="https://open.kakao.com/o/sEJSdtPc" target="_blank">
                <i className="icon-bubbles box"> talk</i>
              </a>
            </div>
            <div>
              <i className="icon-mail box"> mail</i>
            </div>
            <div>
              <a href="https://www.instagram.com/ana_zombi/" target="_blank">
                <i className="icon-instagram box"> sns</i>
              </a>
            </div>
            <div>
              <a href="https://github.com/BaekDorazi" target="_blank">
                <i className="icon-github box"> git</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
