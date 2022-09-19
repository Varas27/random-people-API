import './styles.css'
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import ModalImage from "react-modal-image";
import { useEffect } from 'react';

export const Card = ({ name, lastName, country, age, email, pfp, gender, id, handleDelete, setModal }) => {

    useEffect(() => {
        document.querySelectorAll('.name, .email, .country').forEach(function (e) {
            if (e.offsetWidth < e.scrollWidth) {
                e.setAttribute('title', e.innerText);
                e.classList.add("overflow-ellipsis");
            } else {
                e.removeAttribute('title');
                e.classList.remove("overflow-ellipsis");
            }
        });
    }, [])

    return (
        <>
            <div className="col-11 col-md-4 col-lg-3 person-card mx-3 my-4 p-0">
                <div className="banner">
                    <button title='Edit this person' className='edit-button border-0 m-3 p-0' onClick={() => { setModal(true) }}>
                        <FiEdit size='25px' />
                    </button>
                    <button title='Delete this person' className='delete-button border-0 ms-auto m-3 p-0' onClick={() => { handleDelete(id) }}>
                        <AiOutlineDelete size='25px' />
                    </button>
                    <div className='gender d-flex align-items-center'>
                        <p className='mb-0 age'>{age}</p>
                        {gender === 'male' ?
                            <BiMaleSign size='20px' className='ms-2' />
                            :
                            <BiFemaleSign size='20px' className='ms-2' />
                        }
                    </div>
                </div>
                <div className="avatar">
                    <ModalImage small={pfp} medium={pfp} alt={`${name} ${lastName} avatar`} hideZoom={true} hideDownload={true} />
                </div>
                <div className="content">
                    <h1 className='name h5 mb-2'>{name} {lastName}</h1>
                    <p className='email mb-1'><span className='bold'>Email:</span> {email}</p>
                    <p className='country mb-0'><span className='bold'>Country:</span> {country}</p>
                </div>
            </div>
        </>
    )
}