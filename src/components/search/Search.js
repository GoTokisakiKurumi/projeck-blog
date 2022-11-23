import './Search.css';

const Search = () => {
  return (
    <>
      <div className='container search'>
        <form>
          <input type='text' name='search' placeholder='Search...' autoFocus='true' autoComplete='off' />
        </form>
      </div>
    </>
  )
}

export default Search;
