import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Brow from './metodos/Browser.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Dess-appweb-nota1">
    <Brow />
  </BrowserRouter>,
);