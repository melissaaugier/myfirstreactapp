import StarRating from "../ReviewsSection/StarRating";
import ReviewForm from "../ReviewsSection/ReviewForm";
import calculateAverageRating from '../../../utils/calculateAverageRating'
import styles from './Aside.module.css';

function Aside({reviews, addReview, editReview, isEditing, setIsEditing, currentReview}) {
    const averageRating = calculateAverageRating(reviews);

    return (
        <aside className={styles.Aside}>
            <h1>&#x235F; LITTLE RANDOM REVIEWS</h1>
            <p className="font-gray">{averageRating} Rating | {reviews.length} reviews</p>
            <StarRating rating={averageRating}/>
            <div>
                <ReviewForm addReview={addReview} editReview={editReview} isEditing={isEditing} setIsEditing={setIsEditing} currentReview={currentReview}/>
            </div>
        </aside>
    );
}

export default Aside;