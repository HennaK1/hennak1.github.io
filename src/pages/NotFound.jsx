import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/NotFound.css';

//Not found page
const NotFoundPage = () => {
  const navigate = useNavigate();

  const frontPage = () => {
    navigate('/', { replace: true });
  };

  return (
    <Container className="container">
      <Row>
        <Col>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        </Col>
        <Button classname="homeButton" onClick={frontPage}>
          Home
        </Button>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
