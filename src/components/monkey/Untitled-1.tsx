import React from "react";

export interface IProps {}

export interface IState {
  isFlipped: boolean;
}

class App extends React.Component<IProps, IState> {
  public state = {
    isFlipped: false
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return <div onClick={this.handleClick}>Click to flip</div>;
  }
}
