import React from "react";
// 组件名字需要大写
function Compent(props) {
  return <div>{props.name}</div>;
}
function functionCompent(params) {
  // return 后的内容要加括号不然报错
  return (
    <div>
      <Compent name="你的名字"></Compent>
    </div>
  );
}
export default functionCompent;
