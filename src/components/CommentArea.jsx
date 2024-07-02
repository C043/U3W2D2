import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import IsLoading from "./IsLoading";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    reviews: [],
    isLoading: false,
    hasError: false,
  };

  fetchComments = async () => {
    console.log(this.props);
    try {
      this.setState({ isLoading: true });
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
          },
        },
        { method: "GET" }
      );
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ reviews: data });
        this.setState({ isLoading: false });
      } else {
        throw new Error("Errore nel recapitare i dati");
      }
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
      console.log(error);
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <>
        {this.props.asin === false && <Alert>Select a book</Alert>}
        {this.state.hasError && (
          <Alert className="mt-3" variant="danger">
            Qualcosa è andato storto!
          </Alert>
        )}
        {this.state.isLoading ? <IsLoading /> : <CommentsList reviews={this.state.reviews} />}
        {this.props.asin && this.state.reviews.length < 1 ? <Alert>No reviews, add one!</Alert> : ""}
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
