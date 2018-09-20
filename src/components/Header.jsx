import React, { Component } from "react";
import "../assets/css/Header.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Header-container">
        <div className="Header-container Top-bar" />
      </div>
    );
  }
}
