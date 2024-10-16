import { Routes, Route } from 'react-router-dom'; 
import GetAllData from "../components/search.jsx";
import App from '../App.jsx'
import PerfilArtista from '../components/PerfilArtista.jsx';
import PerfilCancion from '../components/PerfilCancion.jsx';
import AddArtist from '../components/AddArtista.jsx';
import EditArtist from '../components/EditArtista.jsx';
import AddTrack from '../components/AddTrack.jsx';
import EditTrack from '../components/EditTrack.jsx';

function Brow(){
    return(
        <>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/track/:id' element={<PerfilCancion/>}></Route>
            <Route path='/artista/:id' element={<PerfilArtista/>}></Route>
            <Route path='/search' element={<GetAllData />} />
            <Route path='/add/artista' element={<AddArtist/>}/>
            <Route path='/edit/artista/:id' element={<EditArtist/>}/>
            <Route path='/add/track' element={<AddTrack/>}/>
            <Route path='/edit/track/:id' element={<EditTrack/>}/>
        </Routes>
        </>
    )
}

export default Brow