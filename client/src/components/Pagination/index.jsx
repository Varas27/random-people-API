import './styles.css';

export const Pagination = ({ peoplePerPage, totalPeople, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav>
                <ul className='d-flex'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-link'>
                            <button onClick={() => paginate(number)} className='btn'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
