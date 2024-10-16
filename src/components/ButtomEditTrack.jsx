import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function EditTrackButtom({ id }) { 
    return (
        <Link to={`/edit/track/${id}`}>
            <Button variant="success">Editar</Button>
        </Link>
    );
}

export default EditTrackButtom;