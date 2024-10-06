import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function schemaArtista({ nombre, url_img }) {
  return (
    <Card style={{ width: "18rem" }} className='shadow-sm'>
      <Card.Img variant="top" src={url_img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Artista</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default schemaArtista;