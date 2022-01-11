import React from "react";
class Compent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function classCompent(props) {
  return (
    <div>
      <Compent name='classCompent'></Compent>
    </div>
  );
}
export default classCompent;
