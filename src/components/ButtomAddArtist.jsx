import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/ButtomSearch.css';

function AddArtistButtom() {
    return (
        <Link to='/add/artista' className="custom-button">
            <button className="btn d-flex align-items-center custom-btn">
            <i className="bi bi-person-add"></i>
                Agregar Artista
            </button>
        </Link>
    );
}

export default AddArtistButtom;