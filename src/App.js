import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Button from './components/buttonBack/ButtomBack';
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
          <Route path='/waifu' element='<h1>waifu</h1>' />
        </Routes>
        <Button />
      </BrowserRouter>
    </>
  );
}

export default App;
