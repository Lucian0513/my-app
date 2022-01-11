import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    clockTime: 1,
    show: true,
  };
  handleClick = () => {
    this.setState({
      clockTime: Math.random(),
    });
  };
  updateTime = () => {
    this.setState({
      clockTime: this.state.clockTime++,
    });
  };
  render() {
    let button;
    if (this.state.show) {
      button = <button>点击</button>;
    } else {
      button = <button>不显示</button>;
    }
    return (
      <div>
        Login
        <Link to="/home" style={{ color: "black" }}>
          <div>点击跳转到首页</div>
        </Link>
        <div onClick={this.handleClick}>点击事件</div>
        <div>{this.state.clockTime}</div>
        {button}
      </div>
    );
  }
}
export default Login;
