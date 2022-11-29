import {
  Sidebar, Header, Home,
  About, Album, Waifu,
  Ai
} from './components/app/index';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar NavLink={NavLink} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/album' element={<Album />} />
          <Route path='/waifu' element={<Waifu NavLink={NavLink} />} />
          <Route path='/waifu/AI/' element={<Ai />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
