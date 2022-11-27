import { Sidebar, Header, Home, About, Album, Waifu } from './components/app/index';
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
          <Route path='/waifu' element={<Waifu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
