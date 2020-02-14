import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./component/User"

class Title extends Component {
  static defaultProps = {
    title: "default Title"
  };

  handleTitleClicked(e) {
    alert(e.target.innerHTML);
  }

  handleMouseOver() {
    alert("do not d touch me");
  }
  render() {
    return (
      <h1
        onClick={this.handleTitleClicked.bind(this)}
        onMouseDown={this.handleMouseOver}
      >
        {this.props.title}
      </h1>
    );
  }
}

function App() {



  const users = [
    { username: "Jerry", age: 21, gender: "male" },
    { username: "Tomy", age: 22, gender: "male" },
    { username: "Lily", age: 19, gender: "female" },
    { username: "Lucy", age: 20, gender: "female" }
  ];

  return (
  <div>{users.map((user) => <User user={user} key={user.age}/> )}</div>
  );
}

export default App;
