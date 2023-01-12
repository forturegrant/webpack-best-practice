import React, { Component } from 'react';

class Test1 extends Component{
    render(): React.ReactNode {
        return 1;
    }
    componentDidMount(): void {
        console.log('test1')
    }
}

class Test2 extends Component{
    render(): React.ReactNode {
        return 2;
    }
    componentDidMount(): void {
        console.log('test2')
    }
}

function withA(WrappedComponent){
    return class extends Component{
        componentDidMount(): void {
            console.log('I am component');
        }
        render(){
            return <WrappedComponent />
        }
    }
}

const ATest1 = withA(Test1);
const ATest2 = withA(Test2);

export {
    ATest1,
    ATest2
}
