import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './offCanva.jsx'; 

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
      <div className="container mt-5">
        <h2>Editar Canción</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <div className="card p-3">
          <form onSubmit={handleEditTrack}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre de la Canción</label>
              <input
                type="text"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                id="artist"
                name="artist"
                value={trackData.artist}
                onChange={handleTrackChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Actualizar Canción</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditTrack;