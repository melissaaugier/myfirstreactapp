import StarRating from "./StarRating";

function Aside(comments) {
    return (
        <aside>
            <h1>&#x235F; LITTLE RANDOM REVIEWS</h1>
            <p className="font-gray">{comments.average_rating} Rating | {comments.number_of_comments} reviews</p>
            <StarRating rating={comments.average_rating}/>
        </aside>
    );
}

export default Aside;