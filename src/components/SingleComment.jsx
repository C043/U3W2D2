import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
const SingleComment = props => {
  /*   state = {
    id: this.props.id,
    show: true,
  };
 */

  const [show, setShow] = useState(true);

  const handleDelete = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      if (resp.ok) {
        setShow(false);
        await new Promise(resolve => setTimeout(resolve, 2000));
        props.fetchComments();
      } else {
        throw new Error("Errore nella cancellazione del dato");
      }
    } catch (error) {
      window.alert("Error in deleting comment");
      console.log(error);
    }
  };

  console.log(props.id);
  return show ? (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center">
        <p>
          {props.author} <br /> gave {props.rate}/5 <br /> `{props.comment}`
        </p>
        <Button variant="danger" className="ms-auto" onClick={() => handleDelete()}>
          <Trash3 />
        </Button>
      </div>
    </div>
  ) : (
    <Alert variant="danger">
      Comment <b>deleted</b>
    </Alert>
  );
};

export default SingleComment;
