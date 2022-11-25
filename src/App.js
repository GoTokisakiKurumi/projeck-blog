import Sidebar from './components/app/sidebar/Sidebar';
import Header from './components/app/header/Header';
import Home from './components/app/home/Home';
import About from './components/app/about/About';
import Waifu from './components/app/waifu/Waifu';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar NavLink={NavLink} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/album' element='<h1>album</h1>' />
          <Route path='/waifu' element={<Waifu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
