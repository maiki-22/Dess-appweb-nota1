import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './offCanva.jsx'; 
import '../css/editTrack.css';
import '../css/font.css'
import '../css/trackBoton.css';
function EditTrack() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [trackData, setTrackData] = useState({ name: '', image: '', plays: 0, artist: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Función para obtener los datos de la canción
    const fetchTrack = async () => {
      try {
        const res = await axios.get(`https://6701a7c4b52042b542d849af.mockapi.io/app/track/${id}`);
        setTrackData(res.data); 
      } catch (error) {
        setMessage('Error al cargar los datos de la canción.');
        console.error(error);
      }
    };

    fetchTrack(); 
  }, [id]);

  const handleTrackChange = (e) => {
    setTrackData({ ...trackData, [e.target.name]: e.target.value }); 
  };

  const handleEditTrack = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://6701a7c4b52042b542d849af.mockapi.io/app/track/${id}`, trackData);
      setMessage(`Canción ${trackData.name} actualizada exitosamente!`);
      navigate(`/track/${id}`);
    } catch (error) {
      setMessage('Error al actualizar la canción.');
      console.error(error);
    }
  };

  return (
    <>
      <Menu />
      <div className="container mt-5 edit-track-container">
        <h2 className="edit-track-title titulo">Editar Canción</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <div className="card p-3">
          <form onSubmit={handleEditTrack} className="edit-track-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre de la Canción</label>
              <input
                type="text"
                className="form-control edit-track-input"
                id="name"
                name="name"
                value={trackData.name}
                onChange={handleTrackChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">URL de la Imagen</label>
              <input
                type="text"
                className="form-control edit-track-input"
                id="image"
                name="image"
                value={trackData.image}
                onChange={handleTrackChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="plays" className="form-label">Reproducciones</label>
              <input
                type="number"
                className="form-control edit-track-input"
                id="plays"
                name="plays"
                value={trackData.plays}
                onChange={handleTrackChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="artist" className="form-label">Artista</label>
              <input
                type="text"
                className="form-control edit-track-input"
                id="artist"
                name="artist"
                value={trackData.artist}
                onChange={handleTrackChange}
                required
              />
            </div>
            <button type="submit" className="botonT">
                  <span className="botonT__text">Actualizar Canción</span>
                  <span className="botonT__icon">
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

export default EditTrack;
