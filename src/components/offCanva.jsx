import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/offCanva.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtomSearch from './ButtomSearch';
import { Link } from 'react-router-dom';
import '../css/menulink.css'
import AddArtistButtom from './ButtomAddArtist';
import AddTrackButtom from './ButtomAddTrack';


function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
      alt='Opciones'
      onClick={handleShow}
      style={{ cursor: 'pointer' }}
      className='img bi bi-list'
      ></i>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><Link to='/' className='menu-link text-decoration-none'>
            <h2>Maiki Music</h2>
        </Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='space'>
            <ButtomSearch></ButtomSearch>
            <AddArtistButtom></AddArtistButtom>
            <AddTrackButtom></AddTrackButtom>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;