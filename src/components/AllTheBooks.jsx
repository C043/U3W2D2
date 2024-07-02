import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import horrorBooks from "../data/horror.json";
import historyBooks from "../data/history.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";
import fantasyBooks from "../data/fantasy.json";
import { Component } from "react";

const genres = ["Horror", "History", "Romance", "SciFi", "Fantasy"];

class AllTheBooks extends Component {
  state = {
    currentGenre: "Horror",
  };

  render() {
    return (
      <Container className="my-3" data-bs-theme="light">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          {genres.map(genre => (
            <Button
              key={genre}
              variant="primary"
              onClick={() => {
                this.setState({ currentGenre: genre });
              }}
            >
              {genre}
            </Button>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="h4">{this.state.currentGenre}</h2>
        </div>
        <Row className="gy-4 align-items-center">
          {this.state.currentGenre === "Horror" &&
            horrorBooks.map(book => {
              return (
                <Col key={book.asin} xs="12" md="6" lg="4" xl="3">
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "437px" }} />
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Card.Title className="line-clamp m-0 fs-6">{book.title}</Card.Title>
                        <Badge>{book.price}$</Badge>
                      </div>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          {this.state.currentGenre === "SciFi" &&
            scifiBooks.map(book => {
              return (
                <Col key={book.asin} xs="12" md="6" lg="4" xl="3">
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "437px" }} />
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Card.Title className="line-clamp m-0">{book.title}</Card.Title>
                        <Badge>{book.price}$</Badge>
                      </div>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          {this.state.currentGenre === "History" &&
            historyBooks.map(book => {
              return (
                <Col key={book.asin} xs="12" md="6" lg="4" xl="3">
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "437px" }} />
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Card.Title className="line-clamp m-0">{book.title}</Card.Title>
                        <Badge>{book.price}$</Badge>
                      </div>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          {this.state.currentGenre === "Romance" &&
            romanceBooks.map(book => {
              return (
                <Col key={book.asin} xs="12" md="6" lg="4" xl="3">
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "437px" }} />
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Card.Title className="line-clamp m-0">{book.title}</Card.Title>
                        <Badge>{book.price}$</Badge>
                      </div>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          {this.state.currentGenre === "Fantasy" &&
            fantasyBooks.map(book => {
              return (
                <Col key={book.asin} xs="12" md="6" lg="4" xl="3">
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "437px" }} />
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Card.Title className="line-clamp m-0">{book.title}</Card.Title>
                        <Badge>{book.price}$</Badge>
                      </div>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
