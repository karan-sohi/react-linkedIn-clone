import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({avatar, Icon, title, logOut}) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <Avatar onClick={logOut} className="headerOption__icon" src={avatar}>{user?.email[0]}</Avatar>}
        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption