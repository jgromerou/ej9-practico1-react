import { Card, Row } from 'react-bootstrap';
import CardPaciente from './CardPaciente/CardPaciente';

const GridPaciente = ({ listaPacientes }) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Title className="mt-4 text-uppercase display-6 fw-bold text-center">
          Administra las citas aquí
        </Card.Title>
        <Row className="my-4 px-3">
          {listaPacientes.map((paciente, index) => (
            <CardPaciente key={index} paciente={paciente} />
          ))}
        </Row>
      </Card>
    </>
  );
};

export default GridPaciente;
