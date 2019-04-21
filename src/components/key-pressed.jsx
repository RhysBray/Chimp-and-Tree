import React from "react";

// export interface IProps {}

// export interface IState {}

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentKey: "" };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.setState({ currentKey: e.keyCode });
    if (e.keyCode === 27) {
      console.log("You just pressed Escape!");
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <h2>The last key you pressed has the keycode: {this.state.currentKey}</h2>
    );
  }
}

export default Layout;
