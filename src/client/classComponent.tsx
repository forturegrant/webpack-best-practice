import React from "react";

export default class Test extends React.Component {
  state = {
    num: 0,
  };
  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({
          num: this.state.num + 1,
        });
        // this.setState({
        //     num: 3
        // })
        console.log(this.state.num);
      }, 0);
    }
    // this.setState({
    //     num: 2
    // })
    // this.setState({
    //     num: 3
    // })
    // console.log(this.state.num)
  };
  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>
          class Component{this.state.num}
        </button>
      </div>
    );
  }
}
