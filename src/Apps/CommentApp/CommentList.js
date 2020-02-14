import React, { Component } from 'react'
import CommentItem from './CommentItem';

export class CommentList extends Component {
    static defaultProps = {
        comments: []
      }
    
    render() {
        const {comments} = this.props;
        return (
        <div> { comments.map((comment, i)=> <CommentItem key={i} comment={comment}/>) }</div>
        )
    }
}

export default CommentList
