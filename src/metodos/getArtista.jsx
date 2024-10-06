import axios from 'axios';


async function getArtista() {
  try {
    const res = await axios.get('https://6701a7c4b52042b542d849af.mockapi.io/app/artist/2');
    const nombre = res.data.name;
    const url_img = res.data.image;
    const listeners = res.data.monthly_listeners;
    
    return { nombre, url_img, listeners };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getArtista;