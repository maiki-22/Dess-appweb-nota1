import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/boton.css'

function ButtomSearch() {
    return (
        <Link to='/search' className="noline">
            <button type="button" class="button">
                <span class="button__text">Buscar</span>
                <span class="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M10 2a8 8 0 1 0 5.29 14.29l5.09 5.09a1 1 0 0 0 1.41-1.41l-5.09-5.09A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6Z"/>
                    </svg>
                </span>
            </button>
        </Link>
    );
}

export default ButtomSearch;