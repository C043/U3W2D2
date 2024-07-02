import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: 5,
      elementId: this.props.asin,
    },
  };

  formHandler = async e => {
    try {
      e.preventDefault();
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
        },
        method: "POST",
        body: JSON.stringify(this.state.review),
      });
      if (resp.ok) {
        window.alert("Inviato!");
        this.setState({ review: { comment: "", rate: 5, elementId: this.props.asin } });
      } else {
        throw new Error("Invio fallito");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({ review: { comment: "", rate: 5, elementId: this.props.asin } });
    }
  };

  render() {
    return (
      <Form className="mx-2 mb-2" onSubmit={e => this.formHandler(e)}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="What do you think?"
            value={this.state.review.comment}
            onChange={e => this.setState({ review: { ...this.state.review, comment: e.target.value } })}
            required
            disabled={this.props.asin === false}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            value={this.state.review.rate}
            onChange={e => this.setState({ review: { ...this.state.review, rate: e.target.value } })}
            disabled={this.props.asin === false}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={this.props.asin === false}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
