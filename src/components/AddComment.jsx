import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = props => {
  const [review, setReview] = useState({ comment: "", rate: 5, elementId: props.asin });

  const formHandler = async e => {
    try {
      e.preventDefault();
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
        },
        method: "POST",
        body: JSON.stringify(review),
      });
      if (resp.ok) {
        window.alert("Inviato!");
        setReview({ comment: "", rate: 5, elementId: props.asin });
      } else {
        throw new Error("Invio fallito");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.asin) {
      setReview({ comment: "", rate: 5, elementId: props.asin });
    }
  }, [props]);

  return (
    <Form className="mx-2 mb-2" onSubmit={e => formHandler(e)}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="What do you think?"
          value={review.comment}
          onChange={e => setReview({ ...review, comment: e.target.value })}
          required
          disabled={props.asin === false}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rate">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          value={review.rate}
          onChange={e => setReview({ ...review, rate: e.target.value })}
          disabled={props.asin === false}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={props.asin === false}>
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
