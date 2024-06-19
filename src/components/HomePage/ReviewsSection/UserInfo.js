import styles from './UserInfo.module.css';

function UserInfo({profileImg, username}) {
  return(
    <div className={styles.UserInfo}>
      <img src={profileImg} alt='user_profile_picture' />
      <p className='font-gray font-bold' >{username} :&nbsp;</p>
    </div> 
  );
}

export default UserInfo;