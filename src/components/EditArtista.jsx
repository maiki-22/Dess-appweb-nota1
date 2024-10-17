import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './offCanva.jsx';
import '../css/editArtist.css'; 
import '../css/font.css'
import '../css/sumBoton.css';

function EditArtist() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [artistData, setArtistData] = useState({ name: '', image: '', monthly_listeners: 0 });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await axios.get(`https://6701a7c4b52042b542d849af.mockapi.io/app/artist/${id}`);
        setArtistData(res.data);
      } catch (error) {
        setMessage('Error al cargar los datos del artista.');
        console.error(error);
      }
    };

    fetchArtist();
  }, [id]);

  const handleArtistChange = (e) => {
    setArtistData({ ...artistData, [e.target.name]: e.target.value });
  };

  const handleEditArtist = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://6701a7c4b52042b542d849af.mockapi.io/app/artist/${id}`, artistData);
      setMessage(`Artista ${artistData.name} actualizado exitosamente!`);
      navigate(`/artista/${id}`);
    } catch (error) {
      setMessage('Error al actualizar el artista.');
      console.error(error);
    }
  };

  return (
    <>
      <Menu />
      <div className="container mt-5 edit-artist-container">
        <h2 className="edit-artist-title titulo">Editar Artista</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <div className="card p-3">
          <form onSubmit={handleEditArtist} className="edit-artist-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre del Artista</label>
              <input
                type="text"
                className="form-control edit-artist-input"
                id="name"
                name="name"
                value={artistData.name}
                onChange={handleArtistChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">URL de la Imagen</label>
              <input
                type="text"
                className="form-control edit-artist-input"
                id="image"
                name="image"
                value={artistData.image}
                onChange={handleArtistChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="monthly_listeners" className="form-label">Oyentes Mensuales</label>
              <input
                type="number"
                className="form-control edit-artist-input"
                id="monthly_listeners"
                name="monthly_listeners"
                value={artistData.monthly_listeners}
                onChange={handleArtistChange}
                required
              />
            </div>
            <button type="submit" className="botonS">
                <span className="botonS__text">Actualizar Artista</span>
                <span className="botonS__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="svg">
                    <path
                      style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                      d="M133.7,360.4,48,464l103.6-85.7a34.54,34.54,0,0,1,6.2-5.2l224.9-224.8a23.93,23.93,0,0,0,0-33.86L364.56,76.9a23.93,23.93,0,0,0-33.86,0L107.1,300.6a34.54,34.54,0,0,1-5.2,6.2Z"
                    />
                    <line
                      x1="294"
                      y1="176"
                      x2="370"
                      y2="252"
                      style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
                    />
                  </svg>
                </span>
              </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditArtist;

