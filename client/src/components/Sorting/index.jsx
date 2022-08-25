import './styles.css';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Sorting = ({ handleSort, sort }) => {
    const [sortMenu, setSortMenu] = useState(false)

    return (
        <>
            <button type="button" className="sort-button" onClick={() => sortMenu ? setSortMenu(false) : setSortMenu(true)}>
                Sort by {sortMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {sortMenu ?
                <div className="sort-menu">
                    <ul>
                        <li><button type="button" className="sortBy-button" onClick={handleSort}>Name {!sort ? <MdKeyboardArrowUp className='ms-1' size='18px' /> : <MdKeyboardArrowDown className='ms-1' size='18px' />}</button></li>
                        <div className="d-flex justify-content-center">
                            <hr className="my-0 w-75" style={{ borderColor: "rgb(239, 239, 239)" }}></hr>
                        </div>
                        <li><button type="button" className="sortBy-button d-flex justify-content-center align-items-center">Other... <MdKeyboardArrowDown className='ms-1' size='18px'/></button></li>
                    </ul>
                </div>
                :
                null
            }
        </>
    )
}