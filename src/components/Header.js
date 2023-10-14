import React from 'react';
import './Header.css'

function Header(props) {
  console.log(props);
  return (
    <div className='headerContainer'>
      <h1 className='headerTitle'>{props}</h1>
      console.log(props,"header")
    </div>
  )
}

export default Header