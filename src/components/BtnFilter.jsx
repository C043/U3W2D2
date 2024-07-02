import { Button, Container, Row } from "react-bootstrap";

const genres = ["Horror", "History", "Romance", "SciFi", "Fantasy"];

const BtnFilter = props => (
  <Container className="my-3" data-bs-theme="light">
    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
      {genres.map(genre => (
        <Button key={genre} variant="primary">
          {genre}
        </Button>
      ))}
    </div>
    <div className="d-flex justify-content-center">
      <h2 className="h4">{props.title}</h2>
    </div>
  </Container>
);

export default BtnFilter;
