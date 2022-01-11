import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter:1
    };
  }
  componentDidMount() {
    // 定时器的function函数注意写法
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    // this.setState({ date: new Date() });
    this.setState((state,props)=>({
        date: new Date() ,
        counter:state.counter+props.counter
    }));
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.date.toLocaleTimeString()}</h1>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

function compent(props){
    return <Clock counter={1}></Clock>
}

export default compent;
