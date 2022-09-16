import './styles.css';
import { useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Pagination = ({ currentPeopleLength, peoplePerPage, totalPeopleLength, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPeopleLength / peoplePerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        if (currentPage > 1 && currentPeopleLength === 0) {
            paginate(currentPage - 1);
        }
    }, [currentPage, currentPeopleLength, paginate]);

    return (
        <>
            <nav className='container'>
                <ul className='pagination-nav m-0 mx-auto col-10 col-md-6 col-lg-4 col-xl-3'>
                    <li className='pagination-arrow-list me-auto ms-2'>
                        <button onClick={() => paginate(currentPage - 1)} className='btn p-0 border-0' disabled={currentPage === 1 ? true : false}>
                            <MdKeyboardArrowLeft size='20px' />
                        </button>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={`pagination-number-list mx-1 ${currentPage === number ? 'active' : ''}`}>
                            <button onClick={() => paginate(number)} className='btn border-0'>
                                {number}
                            </button>
                        </li>
                    ))}
                    <li className='pagination-arrow-list ms-auto me-2'>
                        <button onClick={() => paginate(currentPage + 1)} className='btn p-0 border-0' disabled={currentPage === pageNumbers.length ? true : false}>
                            <MdKeyboardArrowRight size='20px' />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};