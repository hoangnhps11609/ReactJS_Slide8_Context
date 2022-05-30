import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

class ThemeChange extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme, changeTheme } = this.context;
    const color = theme === "day" ? "yellow" : "black";
    return (
      <div style={{ height: 300, background: color }}>
        <button onClick={changeTheme}> ThemeChange</button>
      </div>
    );
  }
}

export default ThemeChange;
