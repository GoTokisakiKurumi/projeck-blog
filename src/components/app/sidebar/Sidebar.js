import './Sidebar.css';
import { BsHouse, BsExclamationCircle, BsImage, BsHeart, BsGithub, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Button, Search } from '../../fractions/index';
import { useButtonSide, useUrlPathname } from '../../../store/index';
import { useEffect, useRef, useState } from 'react';

const Sidebar = ({ NavLink }) => {
  const [getStatusSearch, setStatusSearch] = useState(false);
  const getButton = useButtonSide((state) => state.status);
  const removeButton = useButtonSide((state) => state.removeStatus);
  const pathname = useUrlPathname((state) => state.setPath);
  const asideRef = useRef();

  useEffect(() => {
    getButton ? asideRef.current.classList.add('active') : asideRef.current.classList.remove('active');
    window.onscroll = () => { removeButton(); pathname(); }
    window.onclick = (event) => !event.target.parentElement.id ? removeButton() : false;
  })

  return (
    <>
      {getStatusSearch ? <Search setStatusSearch={setStatusSearch} /> : <Button />}
      <aside className='container aside' ref={asideRef} id='aside'>
        <div className='profile-aside'>
          <figure>
            <div className='mdui-ripple mdui-ripple-black'>
              <img src={require('../../../images/profile/kurumi-avatar.png')} alt="" />
            </div>
            <figcaption>
              <ul>
                <IconContext.Provider value={{ className: 'icons-menu' }} >
                  <NavLink to='/' className={({ isActive }) => isActive ? 'active-menu' : 'no-active'} ><li className='menu mdui-ripple mdui-ripple-black'><BsHouse /><p>home</p></li></NavLink>
                  <NavLink to='/about' className={({ isActive }) => isActive ? 'active-menu' : 'no-active'} ><li className='menu mdui-ripple mdui-ripple-black'><BsExclamationCircle /><p>about</p></li></NavLink>
                  <NavLink to='/album' className={({ isActive }) => isActive ? 'active-menu' : 'no-active'} ><li className='menu mdui-ripple mdui-ripple-black'><BsImage /><p>album</p></li></NavLink>
                  <NavLink to='/waifu' className={({ isActive }) => isActive ? 'active-menu' : 'no-active'} ><li className='menu mdui-ripple mdui-ripple-black'><BsHeart /><p>waifu</p></li></NavLink>
                </IconContext.Provider>
              </ul>
            </figcaption>
          </figure>
          <div className='search-aside mdui-ripple mdui-ripple-black'>
            <button onClick={() => getStatusSearch ? setStatusSearch(false) : setStatusSearch(true)}>search</button>
          </div>
          <div className='social-media-aside'>
            <ul>
              <li className='mdui-ripple mdui-ripple-black'><BsGithub /></li>
              <li className='mdui-ripple mdui-ripple-black'><BsInstagram /></li>
              <li className='mdui-ripple mdui-ripple-black'><BsFacebook /></li>
              <li className='mdui-ripple mdui-ripple-black'><BsWhatsapp /></li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}
export default Sidebar;
