import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './offCanva.jsx'; 

function AddTrack() {

  const [trackData, setTrackData] = useState({ name: '', image: '', plays: 0, artist: '' });
  const [message, setMessage] = useState('');

  
  const handleTrackChange = (e) => {
    setTrackData({ ...trackData, [e.target.name]: e.target.value });
  };

  
  const handleAddTrack = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post('https://6701a7c4b52042b542d849af.mockapi.io/app/track', trackData); 
      setMessage(`Canción ${res.data.name} añadida exitosamente!`);
    } catch (error) {
      setMessage('Error al añadir la canción.');
      console.error(error);
    }
  };

  return (
    <>
      <Menu />
      <div className="container mt-5">
        <h2>Añadir Canción</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <div className="card p-3">
          <form onSubmit={handleAddTrack}>
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
            <button type="submit" className="btn btn-primary">Añadir Canción</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTrack;