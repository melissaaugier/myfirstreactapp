import styles from './StarRating.module.css';

const StarRating = ({ rating, showRating }) => {
    const maxStars = 5;
    const fullStar = '★';
    const emptyStar = '☆';
    
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? fullStar : '';
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

    return (
        <div className={styles.StarRating}>
            <span >
                {fullStar.repeat(fullStars)}
                {halfStar}
                {emptyStar.repeat(emptyStars)}
            </span>
            { showRating && <span className='font-gray font-italic'> • {rating} / 5</span> }
        </div>
    );
};

export default StarRating;