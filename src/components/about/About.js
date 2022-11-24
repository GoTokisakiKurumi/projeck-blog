import './About.css';
import { BsCalendar, BsPerson, BsClock } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <section className='container about' id='about'>
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
        <div className='container text'>
          <p>
            Halo, Apakah kalian tahu siapa orang yang ada dibalik blog ini?
            Pastinya penasarankan? makanya kehalaman ini 😄, jadi saya akan
            memperkenalkan diri sebaik mungkin.
          </p>
          <p>
            Nama saya adalah <span>Lutfi Aulia Sidik</span> dari kota <span>Tasikmalaya </span>
            saya lahir tanggal <span>20 april 2005</span>, Saya adalah pembuat/pengembang website ini 😄,
            website ini sendiri tampilan nya terinsfirasi dari website <span><a href='https://www.sazumiviki.com/'></a>sazumiviki.com</span>
          </p>
          <p>
            Saya memiliki cita cita untuk mencari tujuan dari hidup ini,
            ya... jadi bisa di bilang belum mempunyai cita cita 😄
          </p>
          <div className='text-quetes'>
            <p>
              Pasti kalian beranggapan aku ini aneh 😄 ya emang bener saya aneh,
              aku sendiri bingung arti dari hidup ini, masa manusia diciptakan
              hanya untuk mencari uang lalu mati 😄.
            </p>
          </div>
          <p>
            Hobby? Kalau hobi saya simpel cuman coding, nonton anime dan juga olahraga.
          </p>
        </div>
      </section>
    </>
  )
}

export default About;
