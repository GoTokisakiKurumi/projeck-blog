import './Search.css';
import { BsXCircle } from 'react-icons/bs';

const Search = ({ setStatusSearch }) => {
  return (
    <>
      <div className='container search'>
        <span onClick={() => setStatusSearch(false)}><BsXCircle /></span>
        <form>
          <input type='text' name='search' placeholder='Search...' autoFocus='true' autoComplete='off' />
        </form>
      </div>
    </>
  )
}

export default Search;
