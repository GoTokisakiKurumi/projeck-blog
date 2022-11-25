import './Waifu.css';
import HeroPage from '../../fractions/hero-page/HeroPage';
import thumbnails from '../../../images/thumbnails/thumbnail-1.png';

const Waifu = () => {
  return (
    <>
      <section className='container waifu'>
        <HeroPage thumbnails={thumbnails} />
      </section>
    </>
  )
}

export default Waifu;
