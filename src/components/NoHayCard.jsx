import { Card } from 'react-bootstrap';

const NoHayCard = () => {
  return (
    <Card className="mt-3">
      <Card.Title className="my-3 text-uppercase display-6 fw-bold text-center">
        No hay Citas
      </Card.Title>
    </Card>
  );
};

export default NoHayCard;
