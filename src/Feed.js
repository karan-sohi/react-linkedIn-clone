import React from 'react'
import './Feed.css'
import { useState, useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import FeedInputOptions from './FeedInputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      ))
  }, [])

  const addPost = e => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" onChange={e => setInput(e.target.value)} value={input}></input>
            <button onClick={addPost} type="submit">Submit</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedInputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <FeedInputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <FeedInputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <FeedInputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoURL } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={photoURL}
        />
      ))}
      </FlipMove>


    </div>
  )
}

export default Feed