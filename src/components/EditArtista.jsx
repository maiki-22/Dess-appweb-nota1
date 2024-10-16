import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './offCanva.jsx'; 

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
      <div className="container mt-5">
        <h2>Editar Artista</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <div className="card p-3">
          <form onSubmit={handleEditArtist}>
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
            <button type="submit" className="btn btn-primary">Actualizar Artista</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditArtist;
