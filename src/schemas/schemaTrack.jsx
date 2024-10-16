import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../css/schemaCard.css'
import { useNavigate } from 'react-router-dom';

function SchemaTrack({ nombreTrack, url_imgTrack,cantantes,id }) {
  
  const navigate = useNavigate();

    const handleCardClick = () => {
      navigate(`/track/${id}`);
    };
  
  
  
  
  
  
  return (
    <Card style={{ width: "18rem" }} className='shadow-sm hover-card'
    onClick={handleCardClick}>
      <Card.Img variant="top" src={url_imgTrack} className='hover-card'/>
      <Card.Body>
        <Card.Title>{nombreTrack}</Card.Title>
        <Card.Text>{cantantes}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default SchemaTrack;