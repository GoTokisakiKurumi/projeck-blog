import './HeroPage.css';
import { BsCalendar, BsPerson, BsClock } from 'react-icons/bs';

const HeroPage = ({ thumbnails }) => {
  return (
    <>
      <div className='container hero'>
        <figure>
          <div className='mdui-ripple mdui-ripple-black'>
            <img src={thumbnails} alt='' loading='lazy' />
          </div>
          <figcaption>
            <ul>
              <li><button><BsCalendar /><p>2022/10/31</p></button></li>
              <li><button><BsPerson /><p>251 Author: kurumi</p></button></li>
              <li><button><BsClock /><p>Viewed 15 Minutes Ago</p></button></li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default HeroPage;
