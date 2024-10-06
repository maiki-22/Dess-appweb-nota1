import getArtista from '../metodos/getArtista.jsx';
import SchemaArtista from '../schemas/schemaArtista.jsx';
import { useState, useEffect } from 'react';


function ArtistatTarjeta() {
    const [artista, setArtista] = useState(null);

    useEffect(()=> {
        const buscarArtista = async() => {
            const data = await getArtista();
            setArtista(data);
        };
        buscarArtista();
    },[]);

    return (
        <>
          {artista ? (
            <SchemaArtista nombre={artista.nombre} url_img={artista.url_img} />
          ) : (
            <p>Cargando..</p>
          )}
        </>
      )
}


export default ArtistatTarjeta;