import { Card, Row, Col, Button } from 'react-bootstrap';
import './grid-paciente.css';

const GridPaciente = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Title className="mt-4 text-uppercase display-6 fw-bold text-center">
          Administra las citas aquí
        </Card.Title>
        <Row className="my-4 px-3">
          <Col md={6} lg={4} className="mb-3">
            <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
              <div className="colorBox "></div>
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase line-clamp">
                  Mascota: Firulais
                </Card.Title>
                <Card.Text className="line-clamp">Dueño: Pepe</Card.Text>
                <Button variant="danger">Borrar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
              <div className="colorBox "></div>
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase line-clamp">
                  Mascota: Nefertari
                </Card.Title>
                <Card.Text className="line-clamp">Dueño: Gerardo</Card.Text>
                <Button variant="danger">Borrar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GridPaciente;
