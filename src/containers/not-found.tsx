import * as React from "react";
export interface IProps {}

export interface IState {}

class NotFound extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div>
        <h3>Page Not Found</h3>
      </div>
    );
  }
}

export default NotFound;
