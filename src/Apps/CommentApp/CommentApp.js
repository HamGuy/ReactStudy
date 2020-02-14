import React, { Component } from 'react'
import { CommentInput } from "./CommentInput";
import { CommentList } from "./CommentList";
import '../../index.css'

export class CommentApp extends Component {

    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    handleSubmit(e) {
        this.state.comments.push(e)
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmit.bind(this)} />
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp
