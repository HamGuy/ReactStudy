import React, { Component } from "react";
import PropTypes from "prop-types";
import { CommentInput } from "./CommentInput";
import { CommentList } from "./CommentList";
import "../../index.css";

export class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }

  _saveComments(comments) {
      localStorage.setItem('comments', JSON.stringify(comments));
  }

  handleSubmit(e) {
    this.state.comments.push(e);
    this.setState({
      comments: this.state.comments
    });
    this._saveComments(this.state.comments);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
