import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/offCanva.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtomSearch from './ButtomSearch';


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
          <Offcanvas.Title>Maiki Music</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ButtomSearch></ButtomSearch>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;