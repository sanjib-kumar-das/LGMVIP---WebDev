import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>Nature Restored</h1>
            <ul>
              <li>
                Mail: <a href="mailto:xyz@gmail.com">loremipsum@gmail.com</a>
              </li>
              <li>
                Call: <a href="tel: +123456789012">+1234567890</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
