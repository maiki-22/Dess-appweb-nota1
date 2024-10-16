import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'; 
import GetCancion from '../metodos/getCancion.jsx';
import '../css/font.css';
import Menu from './offCanva.jsx';
import "../css/perfilTrack.css";
import EditTrackButtom from './ButtomEditTrack.jsx';
import DeleteTrackButton from './DeleteTrack.jsx';
function PerfilCancion() {
  const { id } = useParams(); // ID de la canción
  const [cancion, setCancion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCancion = async () => {
      const data = await GetCancion(id);
      setCancion(data);
      setLoading(false);
    };

    fetchCancion();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!cancion) {
    return <div>No se encontró información de la canción.</div>;
  }

  return (
    <>
      <Menu></Menu>
      <div className="container mt-5">
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={cancion.image} className="img-fluid rounded-start ola" alt={`${cancion.name} cover`} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title titulo">{cancion.name}</h2>
                <p className="card-text titulo id-title">ID: {id}</p>
                <h3 className='titulo'>Artista: {cancion.artist}</h3>
                <h4 className='titulo'>Reproducciones: {cancion.plays}</h4>
                <div className="edit-button">
                    <EditTrackButtom id={id} />
                </div>
                <div className='delete-button'>
                    <DeleteTrackButton id={id}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilCancion;
