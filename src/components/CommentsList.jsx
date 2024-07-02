import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <div className="mt-2">
        {this.props.reviews.length > 0 &&
          this.props.reviews.map(review => (
            <SingleComment
              key={review._id}
              id={review._id}
              comment={review.comment}
              author={review.author}
              rate={review.rate}
            />
          ))}
      </div>
    );
  }
}

export default CommentsList;
