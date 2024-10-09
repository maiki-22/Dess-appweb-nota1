import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/schemaCard.css'


function schemaArtista({ nombreTrack, url_imgTrack,cantantes }) {
  return (
    <Card style={{ width: "18rem" }} className='shadow-sm hover-card'>
      <Card.Img variant="top" src={url_imgTrack} className='hover-card'/>
      <Card.Body>
        <Card.Title>{nombreTrack}</Card.Title>
        <Card.Text>{cantantes}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default schemaArtista;