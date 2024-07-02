import { Spinner } from "react-bootstrap";

const IsLoading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-2">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default IsLoading;
