import './Album.css';
import { HeroPage } from '../../fractions/index';
import thumbnails from '../../../images/thumbnails/thumbnail-1.png';

const Album = () => {
  return (
    <>
      <section className='container album'>
        <HeroPage thumbnails={thumbnails} />
      </section>
    </>
  )
}

export default Album;
