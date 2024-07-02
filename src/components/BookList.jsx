import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = props => {
  const [currentAsin, setCurrentAsin] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Form className="d-flex flex-column mb-3">
        <InputGroup>
          <InputGroup.Text>Filter</InputGroup.Text>
          <Form.Control
            aria-label="Filter"
            aria-describedby="inputGroup-sizing-big"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </InputGroup>
      </Form>
      <Row className="g-4 align-items-start">
        <Col xs="6">
          <Row>
            {props.genre
              .filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
              .map(book => (
                <SingleBook
                  key={book.asin}
                  book={{
                    title: book.title,
                    img: book.img,
                    price: book.price,
                    asin: book.asin,
                  }}
                  handleSelect={() => setCurrentAsin(book.asin)}
                  currentAsin={currentAsin}
                />
              ))}
          </Row>
        </Col>
        <Col xs={"6"} className="sticky">
          <CommentArea asin={currentAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
