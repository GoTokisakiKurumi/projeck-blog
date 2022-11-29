import './About.css';
import { HeroPage } from '../../fractions/index';
import thumbnails from '../../../images/thumbnails/thumbnail-1.png';

const About = () => {
  return (
    <>
      <section className='container about' id='about'>
        <HeroPage thumbnails={thumbnails} />
        <div className='container text'>
          <p>
            Halo, Apakah kalian tahu siapa orang yang ada dibalik blog ini?
            Pastinya penasarankan? makanya kehalaman ini 😄, jadi saya akan
            memperkenalkan diri sebaik mungkin.
          </p>
          <p>
            Nama saya adalah <span>Lutfi Aulia Sidik</span> dari kota <span>Tasikmalaya </span>
            saya lahir tanggal <span>20 april 2005</span>, Saya adalah pembuat/pengembang website ini 😄,
            website ini sendiri tampilan nya terinsfirasi dari website <span><a href='https://www.sazumiviki.com/'>sazumiviki.com</a></span>
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
