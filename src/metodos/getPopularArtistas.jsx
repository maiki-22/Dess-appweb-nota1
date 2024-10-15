import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import SchemaArtista from '../schemas/schemaArtista.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css'
const GetPopularArtistas = () => {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        const obtenerArtistas = async () => {
            try {
                const res = await axios.get('https://6701a7c4b52042b542d849af.mockapi.io/app/artist');

                const TopArtistas = res.data
                    .sort((a, b) => b.monthly_listeners - a.monthly_listeners)
                    .slice(0, 4);
                setArtistas(TopArtistas);
            } catch (error) {
                console.log(error);
            }
        };

        
        obtenerArtistas();
    }, []); 

    return (

    <>
       <Container className="mt-4">
            <h1 className="text-center mb-4 titulo">Artistas Populares</h1>
            <Row>
                {artistas.map((artista, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <SchemaArtista nombre={artista.name} url_img={artista.image} id={artista.id}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
    );
};

export default GetPopularArtistas;
