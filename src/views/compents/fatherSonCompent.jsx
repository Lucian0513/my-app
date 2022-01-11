import React from "react";
function compent() {
  return (
    <div>
      <h2>标题</h2>
     <Content content='内容'></Content>
    </div>
  );
}
function Content(props){
    return (
        <div>
            {props.content}
        </div>
    )
}
export default compent;
