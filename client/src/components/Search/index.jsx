import './styles.css';
import { ImCross } from 'react-icons/im';

export const Search = ({ search, setSearch }) => {

    const removeInputValue = () => {
        setSearch('');
        document.querySelector('.search-input').value = '';
    }

    return (
        <div className='search d-flex'>
            <input className='search-input mr-auto' type="text" placeholder='Search person...' onInput={(e) => setSearch(e.target.value)} />
            {
                search ?
                    <button className='ms-auto d-flex align-items-center border-0 p-0 remove' onClick={removeInputValue}>
                        <ImCross size='15px' />
                    </button>
                    :
                    null
            }
        </div>
    )
}