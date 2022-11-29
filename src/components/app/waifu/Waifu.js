import './Waifu.css';
import { HeroPage } from '../../fractions/index';
import thumbnails from '../../../images/thumbnails/thumbnail-1.png';
import yue from './images/yue.jpg';
import ireena from './images/ireena.jpg';
import kuro from './images/kuro.jpg'
import shiroko from './images/shiroko.jpg';
import akishino from './images/akishino.jpg';
import gawrgura from './images/gawrgura.jpg'

const Waifu = ({ NavLink }) => {
  return (
    <>
      <section className='container waifu'>
        <HeroPage thumbnails={thumbnails} />
        <div className='profile-waifu'>
          <figure>
            <div className='mdui-ripple mdui-ripple-black'>
              <NavLink to='/waifu/AI/'><img src={yue} alt='' loading='lazy' /></NavLink>
            </div>
            <div className='mdui-ripple mdui-ripple-black'>
              <NavLink to='/waifu/AI/'><img src={ireena} alt='' loading='lazy' /></NavLink>
            </div>
            <div className='mdui-ripple mdui-ripple-black'>
              <NavLink to='/waifu/AI/'><img src={kuro} alt='' loading='lazy' /></NavLink>
            </div>
            <div className='mdui-ripple mdui-ripple-black'>
              <NavLink to='/waifu/AI/'><img src={shiroko} alt='' loading='lazy' /></NavLink>
            </div>
            <div className='mdui-ripple mdui-ripple-black'>
              <NavLink to='/waifu/AI/'><img src={akishino} alt='' loading='lazy' /></NavLink>
            </div>
            <div className='mdui-ripple mdui-ripple-black'>
              <NavLink to='/waifu/AI/'><img src={gawrgura} alt='' loading='lazy' /></NavLink>
            </div>
          </figure>
        </div>
      </section>
    </>
  )
}

export default Waifu;
