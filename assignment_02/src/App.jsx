import React from "react";
import ProgressBar from "./components/ProgressBar";

import "./assets/css/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 50,
      value: 0,
      showError: false,
    };
  }

  onchange = (e) => {
    const inputValue = e.target.value;
    if (inputValue >= 0 && inputValue <= 100) {
      this.setState({
        value: inputValue,
        showError: false,
      });
    } else {
      this.setState({
        showError: true,
      });
    }
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      progress: this.state.value,
    });
  };
  render() {
    return (
      <div className="main-container">
        <h1>Progress Bar</h1>
        <ProgressBar
          progress={this.state.progress}
          value={this.state.value}
          onchange={this.onchange}
          handleClick={this.handleClick}
          error={this.state.showError}
        />
      </div>
    );
  }
}
export default App;
