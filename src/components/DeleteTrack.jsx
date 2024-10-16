// DeleteTrackButton.jsx
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteTrackButton({ id }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta canción?");
      if (!confirmDelete) return;

      await axios.delete(`https://6701a7c4b52042b542d849af.mockapi.io/app/track/${id}`);
      
      
      navigate('/');
    } catch (error) {
      console.error("Error eliminando la canción:", error);
      alert("Hubo un error al eliminar la canción.");
    }
  };

  return (
    <button onClick={handleDelete} className='btn btn-danger'>Eliminar</button>
  );
}

export default DeleteTrackButton;