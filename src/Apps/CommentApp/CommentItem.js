import React, { Component } from 'react'

export class CommentItem extends Component {

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

    render() {
        return (
            <div className='comment'>
            <div className='comment-user'>
              <span>{this.props.comment.username} </span>：
            </div>
            <p>{this.props.comment.content}</p>
            <span className='comment-createdtime'>{this.state.timeString}</span>
          </div>
        )
    }
}

export default CommentItem
