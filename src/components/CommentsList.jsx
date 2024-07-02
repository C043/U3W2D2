import SingleComment from "./SingleComment";

const CommentsList = props => {
  return (
    <div className="mt-2">
      {props.reviews.length > 0 &&
        props.reviews.map(review => (
          <SingleComment
            key={review._id}
            id={review._id}
            comment={review.comment}
            author={review.author}
            rate={review.rate}
            fetchComments={() => props.fetchComments()}
          />
        ))}
    </div>
  );
};

export default CommentsList;
