import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import SchemaTrack from '../schemas/schemaTrack.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css'

const GetPopularTrack = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const obtenerTracks = async () => {
            try {
                const res = await axios.get('https://6701a7c4b52042b542d849af.mockapi.io/app/track');

                const TopTracks = res.data
                    .sort((a, b) => b.plays - a.plays)
                    .slice(0, 4);
                setTracks(TopTracks); 
            } catch (error) {
                console.log(error);
            }
        };

        
        obtenerTracks();
    }, []); 

    return (

    <>
       <Container className="mt-4">
            <h1 className="text-center mb-4 titulo">Canciones Populares</h1>
            <Row>
                {tracks.map((track, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <SchemaTrack nombreTrack={track.name} url_imgTrack={track.image} cantantes={track.artist}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
    );
};

export default GetPopularTrack;