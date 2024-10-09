import { Routes, Route } from 'react-router-dom'; 
import GetAllData from "../components/search.jsx";
import App from '../App.jsx'


function Brow(){
    return(
        <>
        <Routes>
            <Route path='/search' element={<GetAllData />} />
            <Route path='/' element={<App/>}/>
        </Routes>
        </>
    )
}

export default Brow