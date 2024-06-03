import React from 'react';

function Header(props) {
  return(
    <div className='user_info'>
      <img src={props.profileImg} />
      <p className='font-gray font-bold' >{props.username} :&nbsp;</p>
    </div> 
  );
}

export default Header;