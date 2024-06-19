import Review from './Review';
import styles from './ReviewsList.module.css';

function ReviewsList({reviews, onDelete, onEdit}) {
    return (
        <div className={styles.ReviewsList}>
            <div>
                { reviews.map((review, index) => (
                    <Review index={index} review={review} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsList;