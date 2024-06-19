import StarRating from './StarRating';
import styles from './Comment.module.css';

function Comment({comment, rating}) {
  return(
    <div>
      <div className={styles.Comment}>&ldquo;&nbsp;{comment}&nbsp;&rdquo;</div>
      <div className='my-20 text-right'>< StarRating rating={rating} showRating={true} /></div>
    </div>
  );
}

export default Comment;