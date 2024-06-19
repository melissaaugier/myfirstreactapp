import { useEffect, useState } from 'react';
import styles from './ReviewForm.module.css';

function ReviewForm({addReview, editReview, currentReview, isEditing, setIsEditing }) {
    const [reviewFormData, setReviewFormData] = useState({
        profileImg: '',
        username: '', 
        rating: 1, 
        comment: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEditing) {
            setReviewFormData(currentReview);
        }
    }, [isEditing, currentReview]);
;
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setReviewFormData({...reviewFormData, [name]: name === 'rating' ? Number(value) : value});
    } 

    const validate = () => {
        const errors = {};
        if (!reviewFormData.profileImg) {
            errors.profileImg = "Picture URL is required";
        }
        if (!reviewFormData.username) {
            errors.username = "Username is required";
        }
        if (reviewFormData.rating < 1 || reviewFormData.rating > 5) {
            errors.rating = "Rating must be between 1 and 5";
        }
        if (!reviewFormData.comment) {
            errors.comment = "Comment is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
   
        if (Object.keys(errors).length === 0) {
            if (isEditing) {
                editReview(reviewFormData);
            } else {
                addReview(reviewFormData);
            }
            setReviewFormData({ profileImg: '', username: '', rating: 1, comment: '' });
        } else {
            setErrors(errors);
        }

    };

    return (
        <form className={`${styles.ReviewForm} ${isEditing ? styles.editForm : ''}`} onSubmit={handleSubmit}>
            <input type='text' name='profileImg' className={errors.profileImg && styles.error} value={reviewFormData.profileImg} placeholder="Pic's URL" onChange={handleChange}/>
            {errors.profileImg && <p className={styles.error}>{errors.profileImg}</p>}
            <input type='text' name='username' value={reviewFormData.username} placeholder="Username" onChange={handleChange}/>
            {errors.username && <p className={styles.error}>{errors.username}</p>}
            <input type='number' name='rating' value={reviewFormData.rating} placeholder="Rating" onChange={handleChange} min='1' max='5'/>
            {errors.rating && <p className={styles.error}>{errors.rating}</p>}
            <input type='text' name='comment' value={reviewFormData.comment} placeholder='Random review' onChange={handleChange}/>
            {errors.comment && <p className={styles.error}>{errors.comment}</p>}
            <button type="submit">{isEditing ? "Update" : "Submit"}</button>
        </form>
    );
}

export default ReviewForm;