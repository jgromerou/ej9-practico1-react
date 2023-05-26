import { Card, Form, Button, Alert } from 'react-bootstrap';
import './form-paciente.css';
import GridPaciente from '../GridPaciente/GridPaciente';
import { useState, useEffect } from 'react';

const FormPaciente = () => {
  let pacienteLocalstorage =
    JSON.parse(localStorage.getItem('listaPacientes')) || [];
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDuenio, setNombreDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomasPaciente, setSintomasPaciente] = useState('');
  const [listaPacientes, setListaPacientes] = useState(pacienteLocalstorage);
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    localStorage.setItem('listaPacientes', JSON.stringify(listaPacientes));
  }, [listaPacientes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      [nombreMascota, nombreDuenio, fecha, hora, sintomasPaciente].includes('')
    ) {
      mostrarAlerta('Completar todos los datos');
      return;
    }
    //si se completa todos los datos se agrega la cita del paciente
    agregarPaciente({
      nombreMascota,
      nombreDuenio,
      fecha,
      hora,
      sintomasPaciente,
    });
  };

  const agregarPaciente = (paciente) => {
    setListaPacientes([...listaPacientes, paciente]);
    setNombreMascota('');
    setNombreDuenio('');
    setFecha('');
    setHora('');
    setSintomasPaciente('');
  };

  //función para mostrar alerta
  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta('');
    }, 3000);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold text-center ">
            Administrar Pacientes de Veterinaria
          </Card.Title>
          <Form onSubmit={handleSubmit} className="container-wrapper">
            <Form.Label className="display-6 mb-3 mt-1">
              <em>Ingrese nueva cita:</em>
            </Form.Label>
            {alerta && <Alert variant="danger">{alerta}</Alert>}
            <Form.Group className="mb-4" controlId="nomMascota">
              <Form.Label className="fw-bold">Nombre de Mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la Mascota"
                value={nombreMascota}
                onChange={(event) => setNombreMascota(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="nomDuenio">
              <Form.Label className="fw-bold">Nombre del Dueño</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre del dueño"
                value={nombreDuenio}
                onChange={(event) => setNombreDuenio(event.target.value)}
              />
            </Form.Group>
            <div className="d-flex flex-row">
              <Form.Group className="mb-4 col-9 pe-1" controlId="fechaId">
                <Form.Label className="fw-bold">Fecha</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Ingrese Fecha"
                  value={fecha}
                  onChange={(event) => setFecha(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4 col-3" controlId="horaId">
                <Form.Label className="fw-bold">Hora</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Ingrese Hora"
                  value={hora}
                  onChange={(event) => setHora(event.target.value)}
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-4" controlId="sintPaciente">
              <Form.Label className="fw-bold">Síntomas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describir Síntomas del Paciente"
                value={sintomasPaciente}
                onChange={(event) => setSintomasPaciente(event.target.value)}
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
