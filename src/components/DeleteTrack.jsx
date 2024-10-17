// DeleteTrackButton.jsx
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/perfilBoton.css';


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
    <button type="buttonP" className="buttonP" onClick={handleDelete}>
      <span className="buttonP__text">Delete</span>
      <span className="buttonP__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" className="svg">
          <title></title>
          <path style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path>
          <line y2="112" y1="112" x2="432" x1="80" style={{ stroke: '#323232', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32px' }}></line>
          <path style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path>
          <line y2="400" y1="176" x2="256" x1="256" style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}></line>
          <line y2="400" y1="176" x2="192" x1="184" style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}></line>
          <line y2="400" y1="176" x2="320" x1="328" style={{ fill: 'none', stroke: '#323232', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}></line>
        </svg>
      </span>
    </button>
  );
}

export default DeleteTrackButton;