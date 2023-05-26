import { Card, Form, Button, Col } from 'react-bootstrap';
import './card-paciente.css';

const CardPaciente = ({ paciente }) => {
  return (
    <>
      <Col md={6} lg={4} className="mb-3">
        <Card>
          <div className="d-flex flex-row justify-content-beetween align-items-center p-2 gap-1">
            <div className="colorBox"></div>
            <Card.Header className="w-100">
              <Card.Title className="fw-bold text-uppercase line-clamp">
                Mascota: {paciente.nombreMascota}
              </Card.Title>
              <Card.Text className="line-clamp">
                Dueño: {paciente.nombreDuenio}
              </Card.Text>
            </Card.Header>
          </div>
          <Card.Body>
            <Form>
              <Form.Group
                className="mb-3 d-flex flex-row align-items-center gap-2"
                controlId="fechaCard"
              >
                <Form.Label className="fw-bold input-width">Fecha:</Form.Label>
                <Form.Control
                  className="border-0"
                  type="date"
                  value={paciente.fecha}
                  readOnly
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex flex-row align-items-center gap-2"
                controlId="horaCard"
              >
                <Form.Label className="fw-bold input-width ">Hora:</Form.Label>
                <Form.Control
                  className="border-0"
                  type="text"
                  value={paciente.hora}
                  readOnly
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex flex-row align-items-center gap-2"
                controlId="sintomas"
              >
                <Form.Label className="fw-bold input-width">
                  Síntomas:
                </Form.Label>
                <Form.Control
                  className="border-0"
                  type="text"
                  value={paciente.sintomasPaciente}
                  readOnly
                />
              </Form.Group>
              <Button variant="danger" className="float-end">
                Borrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardPaciente;
