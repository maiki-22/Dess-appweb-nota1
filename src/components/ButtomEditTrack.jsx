import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/perfilBoton.css';

function EditTrackButtom({ id }) { 
    return (
        <Link to={`/edit/track/${id}`} className="noline">
            <button type="buttonP" className="buttonP">
                <span className="buttonP__text">Editar</span>
                <span className="buttonP__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" className="svg">
                    <title></title>
                    <path style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} d="M133.7,360.4,48,464l103.6-85.7a34.54,34.54,0,0,1,6.2-5.2l224.9-224.8a23.93,23.93,0,0,0,0-33.86L364.56,76.9a23.93,23.93,0,0,0-33.86,0L107.1,300.6a34.54,34.54,0,0,1-5.2,6.2Z" />
                    <line x1="294" y1="176" x2="370" y2="252" style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}></line>
                    </svg>
                </span>
            </button>
        </Link>
    );
}

export default EditTrackButtom;