import {comments} from './commentData';
import Card from './Card';
import Aside from './Aside';

const calculateAverageRating = (comments) => {
  if (comments.length === 0) return 0;
  const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
  return (totalRating / comments.length).toFixed(3);
};

function App() {
  const averageRating = calculateAverageRating(comments);

  return (
    <div>
      <Aside average_rating={averageRating} number_of_comments={comments.length} />
      <div className='comments'>
        {comments.map((comment, index) => (
          <Card key={index} commentObject={comment} />
        ))}
      </div> 
    </div>
  );
}

export default App;
