import {reviewsData} from '../../data/commentData'
import Aside from './AsideSection/Aside';
import ReviewsList from './ReviewsSection/ReviewsList';
import styles from './HomePage.module.css';
import {useState} from 'react';

function HomePage() {
    const [reviews, setReviews] = useState(reviewsData);
    const [isEditing, setIsEditing] = useState(false);
    const [currentReview, setCurrentReview] = useState({});

    const addReview = (newReview) => {
        setReviews([newReview, ...reviews]);    
    };

    const deleteReview = (index) => {
        setReviews(reviews.filter((_, i) => i !== index));
    };

    const editReview = (updatedReview) => {
        const updatedReviews = reviews.map((review, index) =>
            index === currentReview.index ? updatedReview : review
        );

        setReviews(updatedReviews);
        setIsEditing(false);
    };

    const startEditing = (index) => {
        setCurrentReview({ ...reviews[index], index });
        setIsEditing(true);
    };

    return (
        <div className={styles.HomePage}>
            <Aside reviews={reviews} addReview={addReview} editReview={editReview} isEditing={isEditing} setIsEditing={setIsEditing} currentReview={currentReview} />

            <ReviewsList reviews={reviews} onDelete={deleteReview} onEdit={startEditing} />
        </div>
    );
}

export default HomePage;