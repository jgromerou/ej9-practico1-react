import { Card, Form, Button } from 'react-bootstrap';
import './form-paciente.css';
import GridPaciente from '../GridPaciente/GridPaciente';

const FormPaciente = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold text-center ">
            Administrar Pacientes de Veterinaria
          </Card.Title>
          <Form className="container-wrapper">
            <Form.Label className="display-6 mb-3 mt-1">
              <em>Ingrese nuevo paciente:</em>
            </Form.Label>
            <Form.Group className="mb-4" controlId="nombreMascota">
              <Form.Label className="fw-bold">Nombre de Mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la Mascota"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="nombreDuenio">
              <Form.Label className="fw-bold">Nombre del Dueño</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre del dueño"
              />
            </Form.Group>
            <div className="d-flex flex-row">
              <Form.Group className="mb-4 col-9 pe-1" controlId="dniPersona">
                <Form.Label className="fw-bold">Fecha</Form.Label>
                <Form.Control type="date" placeholder="Ingrese Fecha" />
              </Form.Group>

              <Form.Group className="mb-4 col-3" controlId="emailPersona">
                <Form.Label className="fw-bold">Hora</Form.Label>
                <Form.Control type="time" placeholder="Ingrese Hora" />
              </Form.Group>
            </div>

            <Form.Group className="mb-4" controlId="sintomasPaciente">
              <Form.Label className="fw-bold">Síntomas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describir Síntomas del Paciente"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-2 w-100">
              Agregar Nueva Cita
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <GridPaciente />
    </>
  );
};

export default FormPaciente;
