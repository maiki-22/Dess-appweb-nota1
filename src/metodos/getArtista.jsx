import axios from 'axios';


async function getArtista(id) {
  try {
    const res = await axios.get(`https://6701a7c4b52042b542d849af.mockapi.io/app/artist/${id}`);
    const nombre = res.data.name;
    const url_img = res.data.image;
    const listeners = res.data.monthly_listeners;

    const resCanciones = await axios.get(`https://6701a7c4b52042b542d849af.mockapi.io/app/track/`);
    const todasLasCanciones = resCanciones.data;
    const canciones = todasLasCanciones.filter(cancion => cancion.artist === nombre);
    
    return { nombre, url_img, listeners,canciones};
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getArtista;