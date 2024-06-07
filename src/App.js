import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import AllAlbums from './components/AllAlbums';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<AddAlbum/>}/>
      <Route path='/Search' element={<SearchAlbum/>}/>
      <Route path='/delete' element={<DeleteAlbum/>}/>
      <Route path='/Viewall' element={<AllAlbums/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
