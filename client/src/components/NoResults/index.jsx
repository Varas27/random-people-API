import './styles.css'
import { BsQuestionSquare } from 'react-icons/bs';

export const NoResults = () => {
    return (
        <div className="text-center not-found mt-5">
        <BsQuestionSquare className="not-found-icon mb-4" size='10rem' />
        <p className='not-found-text'>There are no results.</p>
    </div>
    )
}