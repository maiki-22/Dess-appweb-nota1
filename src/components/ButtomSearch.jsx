import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/ButtomSearch.css';

function ButtomSearch() {
    return (
        <Link to='/search' className="custom-button">
            <button className="btn d-flex align-items-center custom-btn">
            <i className="bi bi-search-heart"></i>
                Buscar
            </button>
        </Link>
    );
}

export default ButtomSearch;