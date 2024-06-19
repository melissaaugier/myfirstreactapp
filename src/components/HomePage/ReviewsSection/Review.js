import UserInfo from './UserInfo';
import Comment from './Comment';
import styles from './Review.module.css';

function Review({review, index, onDelete, onEdit}) {
  return(
    <div className={styles.Review}>
      <div className={styles.reviewBtns}>
        <span className={styles.updateBtn} onClick={() => onEdit(index)}><i class="fa-regular fa-pen-to-square"></i></span>
        <span className={styles.deleteBtn} onClick={() => onDelete(index)} ><i class="fa-regular fa-trash-can"></i></span>
      </div>
      <UserInfo profileImg = {review.profileImg} username = {review.username} />
      <Comment comment = {review.comment} rating = {review.rating} />
    </div>
  );
}

export default Review;