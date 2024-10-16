import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './offCanva.jsx'; // Tu componente de menú

function AddArtist() {
  const [artistData, setArtistData] = useState({ name: '', image: '', monthly_listeners: 0 });
  const [message, setMessage] = useState('');

  const handleArtistChange = (e) => {
    setArtistData({ ...artistData, [e.target.name]: e.target.value });
  };

  const handleAddArtist = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://6701a7c4b52042b542d849af.mockapi.io/app/artist', artistData);
      setMessage(`Artista ${res.data.name} añadido exitosamente!`);
    } catch (error) {
      setMessage('Error al añadir el artista.');
      console.error(error);
    }
  };

  return (
    <>
      <Menu />
      <div className="container mt-5">
        <h2>Añadir Artista</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <div className="card p-3">
          <form onSubmit={handleAddArtist}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre del Artista</label>
              <input
                type="text"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                id="monthly_listeners"
                name="monthly_listeners"
                value={artistData.monthly_listeners}
                onChange={handleArtistChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Añadir Artista</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddArtist;