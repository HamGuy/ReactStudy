import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    componentWillMount() {
        this._updateTimeString();
        // 每隔 5 秒执行一次定时器任务
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }
    componentWillUnmount() {
        // 移除之前先清除定时器
        clearInterval(this._timer);
    }

    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (+new Date() - comment.createdTime)/1000;
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration/60)} 分钟前` : `${Math.round(Math.max(duration,1))} 秒前`
        });
    }

    handleDeleteComment(e) {
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
        }
    }

    render() {
        return (
            <div className='comment'>
            <div className='comment-user'>
              <span>{this.props.comment.username} </span>：
            </div>
            <p>{this.props.comment.content}</p>
            <span className='comment-createdtime'>{this.state.timeString}</span>
            <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
          </div>
        )
    }
}

export default CommentItem
