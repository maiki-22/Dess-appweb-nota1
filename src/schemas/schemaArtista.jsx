import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/schemaCard.css'


function schemaArtista({ nombre, url_img }) {
  return (
    <Card style={{ width: "19rem" }} className='shadow-sm hover-card'>
      <Card.Img variant="top" src={url_img} className='hover-card' />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Artista</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default schemaArtista;