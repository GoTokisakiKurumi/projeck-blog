import './Header.css';
import { BsList } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useButtonSide } from '../../../store/index';

const Header = () => {
  const setButton = useButtonSide((state) => state.setStatus);

  return (
    <>
      <header className='container header'>
        <ul>
          <li onClick={setButton} id='header'>
            <IconContext.Provider value={{ className: 'icon-button' }}>
              <BsList />
            </IconContext.Provider>
          </li>
          <li><img src={require('../../../images/profile/kurumi-avatar.png')} alt="" /></li>
        </ul>
      </header>
    </>
  )
}

export default Header;
