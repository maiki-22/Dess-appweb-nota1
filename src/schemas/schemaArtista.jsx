import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/schemaCard.css';
import { useNavigate } from 'react-router-dom';


function schemaArtista({ nombre, url_img,id}) {
    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate(`/artista/${id}`);
    };




  return (
    <Card style={{ width: "19rem" }} className='shadow-sm hover-card' onClick={handleCardClick}>
      <Card.Img variant="top" src={url_img} className='hover-card' />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Artista</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default schemaArtista;