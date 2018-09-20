import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import "../assets/css/App.css";
// import "../assets/css/Header.css";
import Header from "../components/Header.jsx";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="sup">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Header />
        <div className="container Main-content">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default Main;
