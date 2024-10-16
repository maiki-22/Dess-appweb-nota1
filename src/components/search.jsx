import { useState, useEffect } from 'react'; 
import axios from 'axios';
import SchemaTrack from '../schemas/schemaTrack.jsx';
import SchemaArtista from '../schemas/schemaArtista.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/font.css';
import Menu from './offCanva.jsx';

const GetAllData = () => {
    const [tracks, setTracks] = useState([]);
    const [artists, setArtists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Data = async () => {
            try {
                const trackRes = await axios.get('https://6701a7c4b52042b542d849af.mockapi.io/app/track');
                const artistRes = await axios.get('https://6701a7c4b52042b542d849af.mockapi.io/app/artist');
                
                setTracks(trackRes.data);
                setArtists(artistRes.data);
            } catch (error) {
                console.log(error);
            }
        };

        Data();
    }, []);

    const searchTermTrimmed = searchTerm.trim().replace(/\s+/g, ' ');

    const filteredTracks = tracks.filter((track) =>
        track.name?.toLowerCase().includes(searchTermTrimmed.toLowerCase()) || 
        track.artist?.toLowerCase().includes(searchTermTrimmed.toLowerCase())
    );

    const filteredArtists = artists.filter((artist) =>
        artist.name?.toLowerCase().includes(searchTermTrimmed.toLowerCase())
    );

    return (
    <>   

        <Menu></Menu>
        <Container className="mt-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar..."
                className="form-control mb-4"
            />
            <h1 className="text-center mb-4 titulo">Resultados de la Búsqueda</h1>
            
            <h2 className='titulo'>Artistas</h2>
            <Row>
                {filteredArtists.map((artist, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <SchemaArtista nombre={artist.name} url_img={artist.image} id={artist.id} />
                    </Col>
                ))}
            </Row>
            <h2 className='titulo'>Canciones</h2>
            <Row>
                {filteredTracks.map((track, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <SchemaTrack nombreTrack={track.name} url_imgTrack={track.image} cantantes={track.artist} id={track.id}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </> 
    );
};

export default GetAllData;

