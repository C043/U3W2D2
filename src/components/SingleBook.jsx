import { Badge, Button, Card, Col } from "react-bootstrap";

const SingleBook = props => {
  return (
    <Col xs="12" lg="6">
      <Card
        type="button"
        className={props.currentAsin === props.book.asin ? "border-danger mb-3" : "mb-3"}
        style={{ width: "100%" }}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          alt={props.book.title}
          style={{ height: "437px" }}
          onClick={() => props.handleSelect()}
        />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <Card.Title className="line-clamp m-0 fs-6">{props.book.title}</Card.Title>
            <Badge>{props.book.price}$</Badge>
          </div>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
