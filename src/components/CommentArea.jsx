import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import IsLoading from "./IsLoading";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

const CommentArea = props => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
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
        setReviews(data);
        setIsLoading(false);
      } else {
        throw new Error("Errore nel recapitare i dati");
      }
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("daje");
    if (props.asin) {
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, refresh]);

  return (
    <>
      {props.asin === false && <Alert>Select a book</Alert>}
      {hasError && (
        <Alert className="mt-3" variant="danger">
          Qualcosa è andato storto!
        </Alert>
      )}
      {isLoading ? <IsLoading /> : <CommentsList reviews={reviews} />}
      {props.asin && reviews.length < 1 ? <Alert>No reviews, add one!</Alert> : ""}
      <AddComment asin={props.asin} setRefresh={() => setRefresh(refresh ? false : true)} />
    </>
  );
};

export default CommentArea;
