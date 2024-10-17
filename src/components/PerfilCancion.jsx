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
        <div className="cancion-card-nueva mb-4 position-relative">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={cancion.image} className="img-fluid nueva-track-image" alt={`${cancion.name} cover`} />
            </div>
            <div className="col-md-8">
              <div className="cancion-info-nueva">
                <h2 className="nueva-cancion-title">{cancion.name}</h2>
                <p className="nueva-cancion-id">ID: {id}</p>
                <h3 className="nueva-cancion-artist">Artista: {cancion.artist}</h3>
                <h4 className="nueva-cancion-plays">Reproducciones: {cancion.plays}</h4>
                <div className="nueva-action-buttons">
                  <EditTrackButtom id={id} />
                  <DeleteTrackButton id={id} />
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


