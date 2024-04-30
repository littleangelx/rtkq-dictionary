import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

import logo from "/assets/images/logo.svg";
import moonIcon from "/assets/images/icon-moon.svg";
import arrowIcon from "/assets/images/icon-arrow-down.svg";

const TopBar = ({ font, onChangeFont }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="topBar">
      <img src={logo} className="logo" />
      <ul className="topBarRhs">
        <div
          className="chosenFont"
          onClick={() => setDropdownVisible((prev) => !prev)}
        >
          {font} <img src={arrowIcon} />
        </div>
        {dropdownVisible && (
          <>
            <div className="dropdownSelect">
              <ul>
                <li
                  onClick={() => {
                    onChangeFont("Sans Serif");
                    setDropdownVisible(false);
                  }}
                >
                  Sans Serif
                </li>{" "}
                <li
                  onClick={() => {
                    onChangeFont("Serif");
                    setDropdownVisible(false);
                  }}
                >
                  Serif
                </li>{" "}
                <li
                  onClick={() => {
                    onChangeFont("Mono");
                    setDropdownVisible(false);
                  }}
                >
                  Mono
                </li>{" "}
              </ul>
            </div>
          </>
        )}
        <div className="topBarToggleDarkMode">
          <Toggle defaultChecked={false} icons={false} />
          <img src={moonIcon} className="moonIcon" />
        </div>
      </ul>
    </div>
  );
};

export default TopBar;
