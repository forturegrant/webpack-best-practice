import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI 
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, 'error');
    console.log(errorInfo, 'errorInfo');
  }

  render() {
    if (this.state.hasError) {
      // 在 render 函数中显示出错信息
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: { num: 0 } };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 制造一个错误
    setTimeout(() => {
      this.setState({ count: 1 });
    }, 0)

    //this.setState({ count: 1 });
  }
  
  static getDerivedStateFromProps(props, state) {
    throw new Error('报错');
    // setTimeout(() => {
    //   throw new Error('报错');
    // }, 0)
  }

  render() {
    console.log(this.state.count, 'this.state.count');  
    return (
      <div>
        <h1>Count: {this.state.count.num.sth}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
