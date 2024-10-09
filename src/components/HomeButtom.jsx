import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/HomeButtom.css'

function HomeButtom() {
    return (
        <Link to='/'>
            <i className="bi bi-house-heart-fill buttom"></i>
        </Link>
    );
}

export default HomeButtom;