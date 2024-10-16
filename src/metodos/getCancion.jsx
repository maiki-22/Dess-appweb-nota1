import axios from 'axios';

async function GetCancion(id) {
  try {
   
    const resCancion = await axios.get(`https://6701a7c4b52042b542d849af.mockapi.io/app/track/${id}`);

    const { name, image, plays, artist } = resCancion.data;
    
    return { name, image, plays, artist };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetCancion;
