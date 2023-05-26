import { Card, Row, Col, Button, Form } from 'react-bootstrap';
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
            <Card>
              <div className="d-flex flex-row justify-content-beetween align-items-center p-2 gap-2">
                <div className="colorBox"></div>
                <Card.Header className="w-100">
                  <Card.Title className="fw-bold text-uppercase line-clamp">
                    Mascota: Firulais
                  </Card.Title>
                  <Card.Text className="line-clamp">Dueño: Pepe</Card.Text>
                </Card.Header>
              </div>
              <Card.Body>
                <Form>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center gap-2"
                    controlId="fechaCard"
                  >
                    <Form.Label className="fw-bold input-width">
                      Fecha:
                    </Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center gap-2"
                    controlId="horaCard"
                  >
                    <Form.Label className="fw-bold input-width ">
                      Hora:
                    </Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center gap-2"
                    controlId="sintomas"
                  >
                    <Form.Label className="fw-bold input-width">
                      Síntomas:
                    </Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Button variant="danger" className="float-end">
                    Borrar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <div className="d-flex flex-row justify-content-beetween align-items-center p-2 gap-2">
                <div className="colorBox"></div>
                <Card.Header className="w-100">
                  <Card.Title className="fw-bold text-uppercase line-clamp">
                    Mascota: Nefertari
                  </Card.Title>
                  <Card.Text className="line-clamp">Dueño: Gerardo</Card.Text>
                </Card.Header>
              </div>
              <Card.Body>
                <Form>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center gap-2"
                    controlId="fechaCard"
                  >
                    <Form.Label className="fw-bold input-width">
                      Fecha:
                    </Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center gap-2"
                    controlId="horaCard"
                  >
                    <Form.Label className="fw-bold input-width ">
                      Hora:
                    </Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center gap-2"
                    controlId="sintomas"
                  >
                    <Form.Label className="fw-bold input-width">
                      Síntomas:
                    </Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Button variant="danger" className="float-end">
                    Borrar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GridPaciente;
