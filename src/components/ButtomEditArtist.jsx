import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function EditArtistButtom({ id }) { 
    return (
        <Link to={`/edit/artista/${id}`}>
            <Button variant="success">Editar</Button>
        </Link>
    );
}

export default EditArtistButtom;