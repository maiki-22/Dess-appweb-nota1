import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'; 
import getArtista from '../metodos/getArtista.jsx';
import '../css/font.css';
import Menu from './offCanva.jsx';
import '../css/perfil.css';
import EditArtistButtom from './ButtomEditArtist.jsx';
import DeleteArtistButton from './DeleteArtist.jsx';


function PerfilArtista() {
  const { id } = useParams(); 
  const [artista, setArtista] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchArtista = async () => {
      const data = await getArtista(id);
      setArtista(data);
      setLoading(false); 
    };

    fetchArtista();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!artista) {
    return <div>No se encontró información del artista.</div>;
  }

  return (
    <>
      <Menu />
      <div className="container mt-5">
        <div className="card mb-4 position-relative"> {/* Añadido position-relative para posicionar el botón */}
          <div className="row g-0">
            <div className="col-md-4">
              <img src={artista.url_img} className="img-fluid rounded-start ola" alt={`${artista.nombre} avatar`} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title titulo">{artista.nombre}</h2>
                <p className="card-text titulo id-title">ID: {id}</p>
                <div className="card-text">
                  <h3 className='titulo'>Oyentes mensuales: {artista.listeners}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-button">
            <EditArtistButtom id={id} />
          </div>
          <div className="delete-button mt-2">
            <DeleteArtistButton id={id} /> 
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Canciones Populares</h3>
          </div>
          <ul className="list-group list-group-flush">
            {artista.canciones.map((cancion, index) => (
              <li key={index} className="list-group-item">
                {index + 1}. {cancion.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PerfilArtista;