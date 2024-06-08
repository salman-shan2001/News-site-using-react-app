import logo from './logo.svg';
import './App.css';
import Addpic from './components/Addpic';
import Newsview from './components/Newsview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchNews from './components/SearchNews';
import DeleteNews from './components/DeleteNews';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<Addpic/>}/>
      <Route path= "/Newsview" element={<Newsview/>}/>
      <Route  path='/SearchNews' element={<SearchNews/>}/>
      <Route path='/DeleteNews' element={<DeleteNews/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
