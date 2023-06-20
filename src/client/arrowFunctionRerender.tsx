import React from "react";

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("child-re-render");
    return <span onClick={this.props.onClick}>111</span>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <Child onClick={this.handleClick} />
        {/* 下面这两种都会导致子组件rerender */}
        {/* <Child onClick={this.handleClick.bind(this)}/> */}
        {/* <Child onClick={() => this.handleClick()}/> */}
      </div>
    );
  }
}
export default App;
