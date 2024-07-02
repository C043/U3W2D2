import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    query: "",
    selected: false,
    currentAsin: false,
  };

  handleSelect = asin => {
    this.setState({ currentAsin: asin });
  };

  render() {
    return (
      <Container>
        <Form className="d-flex flex-column mb-3">
          <InputGroup>
            <InputGroup.Text>Filter</InputGroup.Text>
            <Form.Control
              aria-label="Filter"
              aria-describedby="inputGroup-sizing-big"
              type="text"
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
            />
          </InputGroup>
        </Form>
        <Row className="g-4 align-items-start">
          <Col xs="6">
            <Row>
              {this.props.genre
                .filter(book => book.title.toLowerCase().includes(this.state.query.toLowerCase()))
                .map(book => (
                  <SingleBook
                    key={book.asin}
                    book={{
                      title: book.title,
                      img: book.img,
                      price: book.price,
                      asin: book.asin,
                    }}
                    handleSelect={() => this.handleSelect(book.asin)}
                    currentAsin={this.state.currentAsin}
                    selected={this.state[book.asin]}
                  />
                ))}
            </Row>
          </Col>
          <Col xs={"6"} className="sticky">
            <CommentArea asin={this.state.currentAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
