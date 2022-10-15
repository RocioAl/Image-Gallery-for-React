import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cards = [
  {
    title: 'American Staffordshire Terrier',
    src: 'https://placedog.net/500',
    description: 'Es un compañero inteligente'
  },
  {
    title: 'Bulldog francés',
    src: 'https://placedog.net/501',
    description: 'Es juguetón, alerta, adaptable y completamente irresistible.'
  },
  {
    title: 'Sabueso',
    src: 'https://placedog.net/502',
    description: 'Es tranquilo y equilibrado'
  },
  {
    title: 'Alaskan Klee Kai',
    src: 'https://placedog.net/503',
    description: 'Perro de compañía '
  },
  {
    title: 'Pastor australiano',
    src: 'https://placedog.net/504',
    description: ' Perro de rancho delgado y resistente'
  },
  {
    title: 'Dalmatian',
    src: 'https://placedog.net/505',
    description: 'Famoso por su abrigo manchado'
  }
];
function App() {
  return (
    <>
      <Container>

        <Row class="row g-2">
          <Header title="Galería de Imágenes con React" />
        </Row>

        <Row xs={1} md={2} className="g-4">
          {cards.map((card) => (
            <Col >
              <Card title={card.title} src={card.src} description={card.description} />
            </Col>
          ))}
        </Row>

        <Row className="text-center">
          <Footer description="Todos los derechos reservados" badge="2022" />
        </Row>

      </Container>
    </>
  );
}

export default App;
