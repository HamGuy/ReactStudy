import React, { Component } from "react";

class User extends Component {
  handleTitleClicked(e) {
    alert(e.target.innerHTML);
  }

  handleMouseOver() {
    alert("do not d touch me");
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <div>姓名：{user.username}</div>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
          <hr />
        </div>
      </div>
    );
  }
}

export default User;
