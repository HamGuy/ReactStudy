import React, { Component } from "react";
import PropTypes from "prop-types";

export class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
  }
  
  // Life Cycle
  componentWillMount(){
     const name = localStorage.getItem('username');
      if(name){
          this.setState({
              username: name
          });
      }
  }

  componentDidMount() {
    this.contentInout.focus();
  }

  // Private Methods
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }


  // Event Handles
  handleUserNameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleUserNameOnBlur(e) {
    this._saveUsername(e.target.value);
  }

  handleContentChanged(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleSumbit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;

      if (!username) return alert("请输入用户名");
      if (!content) return alert("请输入评论内容");
      const createdTime = +new Date();
      this.props.onSubmit({ username, content, createdTime});
    }
    this.setState({
      content: ""
    });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUserNameOnBlur.bind(this)}
              onChange={this.handleUserNameChanged.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={contentInput => (this.contentInout = contentInput)}
              value={this.state.content}
              onChange={this.handleContentChanged.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSumbit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
