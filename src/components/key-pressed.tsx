import * as React from "react";
import { IStore } from "../reducers";
import { connect } from "react-redux";
import { checkKeyPressed } from "../reducers/generalReducer";

export interface IOwnProps {}

export interface IStateProps {
  keyPressed: number;
  checkKeyPressed: (input: number) => {};
}

export interface IState {}

class Layout extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { keyPressed: 0 };

  handleKeyPress(e: any) {
    this.setState({ keyPressed: e.keyCode });
    this.props.checkKeyPressed(this.state.keyPressed);
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
    return (
      <h2>
        {/* The last key you pressed has the keycode: {this.props.keyPressed} */}
        {console.log(this.props.keyPressed)}
      </h2>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    keyPressed: state.general.keyPressed
  };
};

const mapDispatchToProps = {
  checkKeyPressed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
