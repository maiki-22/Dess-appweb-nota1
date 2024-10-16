import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/ButtomSearch.css';

function AddTrackButtom() {
    return (
        <Link to='/add/track' className="custom-button">
            <button className="btn d-flex align-items-center custom-btn">
            <i className="bi bi-file-earmark-plus"></i>
                Agregar Cancion
            </button>
        </Link>
    );
}

export default AddTrackButtom;