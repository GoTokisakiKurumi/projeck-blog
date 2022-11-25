import './Waifu.css';
import { BsCalendar, BsPerson, BsClock } from 'react-icons/bs';

const Waifu = () => {
  return (
    <>
      <section className='container waifu'>
        <div className='container hero'>
          <figure>
            <div className='mdui-ripple mdui-ripple-black'>
              <img src={require('../../images/thumbnails/thumbnail-1.png')} alt='' />
            </div>
            <figcaption>
              <ul>
                <li><button><BsCalendar /><p>2022/10/31</p></button></li>
                <li><button><BsPerson /><p>251 Author: Kurumi</p></button></li>
                <li><button><BsClock /><p>Viewed 15 Minutes Ago</p></button></li>
              </ul>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}

export default Waifu;
