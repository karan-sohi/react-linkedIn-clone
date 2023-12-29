import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, login } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (

    <div className="app">

      <Header />
      {!user ? (<Login></Login>
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )
      }
    </div>
  );
}

export default App;
