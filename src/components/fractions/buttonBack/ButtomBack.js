import './ButtonBack.css';
import { BsCaretUpFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useUrlPathname } from '../../../store/index.js';

const ButtonBack = () => {
  const getPathname = useUrlPathname((state) => state.path);

  return (
    <div className='container button-back'>
      <div className='mdui-ripple mdui-ripple-black'>
        <Link to={getPathname} smooth={true} offset={-100} duration={1000} ><BsCaretUpFill values={{ className: 'icon' }} /></Link>
      </div>
    </div>
  )
}

export default ButtonBack;
