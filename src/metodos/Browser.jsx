import { Routes, Route } from 'react-router-dom'; 
import GetAllData from "../components/search.jsx";
import App from '../App.jsx'
import PerfilArtista from '../components/PerfilArtista.jsx';


function Brow(){
    return(
        <>
        <Routes>
            <Route path='/artista/:id' element={<PerfilArtista/>}></Route>
            <Route path='/search' element={<GetAllData />} />
            <Route path='/' element={<App/>}/>
        </Routes>
        </>
    )
}

export default Brow