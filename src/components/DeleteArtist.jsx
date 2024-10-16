// DeleteArtistButton.jsx
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteArtistButton({ id }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este artista?");
      if (!confirmDelete) return;

      
      await axios.delete(`https://6701a7c4b52042b542d849af.mockapi.io/app/artist/${id}`);
      navigate('/');
    } catch (error) {
      console.error("Error eliminando el artista:", error);
      alert("Hubo un error al eliminar el artista.");
    }
  };

  return (
    <button onClick={handleDelete} className='btn btn-danger'>Eliminar</button>
  );
}

export default DeleteArtistButton;
