import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/boton.css';

function AddArtistButtom() {
    return (
        <Link to='/add/artista' className="noline">
            <button type="button" class="button">
                <span class="button__text">Añadir Artista</span>
                <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>
        </Link>
    );
}

export default AddArtistButtom;