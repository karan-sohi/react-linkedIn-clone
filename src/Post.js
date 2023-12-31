import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import FeedInputOptions from './FeedInputOptions'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import Chat from '@mui/icons-material/Chat';

const Post = forwardRef(({ name, description, photoURL, message }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <Avatar src={photoURL}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>  
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <FeedInputOptions Icon={ThumbUpAltIcon} title="Like" color="gray"/>
                <FeedInputOptions Icon={ChatIcon} title="Chat" color="gray"/>
                <FeedInputOptions Icon={ShareIcon} title="Share" color="gray"/>
                <FeedInputOptions Icon={SendIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
});

export default Post