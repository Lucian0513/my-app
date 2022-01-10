import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    clockTime: 1,
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
    let that = this;
    // setInterval(that.updateTime, 10000);
    return (
      <div>
        Login
        <Link to="/home" style={{ color: "black" }}>
          <div>点击跳转到首页</div>
        </Link>
        <div onClick={this.handleClick}>点击事件</div>
        <div>{this.state.clockTime}</div>
      </div>
    );
  }
}
export default Login;
