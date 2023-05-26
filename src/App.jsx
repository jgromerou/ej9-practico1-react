import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import FormPaciente from './components/FormPaciente/FormPaciente';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <FormPaciente />
      </Container>
      <Footer />
    </>
  );
}

export default App;
