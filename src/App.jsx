import GetPopularArtistas from './metodos/getPopularArtistas.jsx';
import GetPopularTrack from './metodos/getPopularTrack.jsx';
import Menu from './components/offCanva.jsx';



function App() {
  return (
    <>
      <Menu />
      <GetPopularArtistas />
      <GetPopularTrack />
    </>
  );
}

export default App;
