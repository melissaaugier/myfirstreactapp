const calculateAverageRating = (comments) => {
if (comments.length === 0) return 0;
const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
return (totalRating / comments.length).toFixed(3);
};

export default calculateAverageRating;