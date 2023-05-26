import { Card, Col, Button } from 'react-bootstrap';
import './grid-paciente.css';

const GridPaciente = () => {
  const colorDiv = { background: color };
  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3 text-uppercase display-6 fw-bold">
          Lista de Pacientes
        </Card.Title>
        <Row className="my-4">
          <Col md={6} lg={4} className="mb-3">
            <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
              <div className="colorBox w-100" style={colorDiv}></div>
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase line-clamp">
                  {empleado.fullName}
                </Card.Title>
                <Card.Text>
                  {empleado.title}{' '}
                  <span className="ms-2 badge text-bg-primary">
                    {empleado.department}
                  </span>
                </Card.Text>
                <Button variant="danger" onClick={() => borrarColor(color)}>
                  Borrar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GridPaciente;
