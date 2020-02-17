import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem';

export class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }

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
