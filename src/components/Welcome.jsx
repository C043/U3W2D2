import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
  <Container>
    <Alert variant="info" className="my-3">
      Check out the new books!
    </Alert>
    <div className="d-flex justify-content-center">
      <h2>Welcome to EpiBooks!</h2>
    </div>
  </Container>
);

export default Welcome;
