import './styles.css'
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import { isEmail } from 'validator';

export const Modal = ({ name, lastName, country, age, email, pfp, gender, id, setModal, handlePut }) => {

    const [newGender, setNewGender] = useState(gender);
    const [newName, setNewName] = useState(name);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newEmail, setNewEmail] = useState(email);
    const [newAge, setNewAge] = useState(age);
    const [newCountry, setNewCountry] = useState(country);

    let editedPerson = {
        gender: newGender,
        name: newName,
        lastName: newLastName,
        pfp,
        email: newEmail,
        age: newAge,
        country: newCountry,
        id
    }

    return (
        <>
            <div className="modal-background">
                <div className="col-sm-10 col-md-7 col-lg-5 col-xl-4 person-card person-card-modal p-0">
                    <div className="banner">
                        <button className='delete-button border-0 ms-auto m-3 p-0' onClick={() => { setModal(false) }}>
                            <ImCross size='20px' />
                        </button>
                        <div className='gender d-flex align-items-center'>
                            <input type="number" placeholder={age} style={{ width: '20%', zIndex: '99' }} onInput={(e) => { e.target.value ? setNewAge(parseInt(e.target.value)) : setNewAge(age) }} />
                            {newGender === 'male' ?
                                <BiMaleSign size='20px' className='ms-2' />
                                :
                                <BiFemaleSign size='20px' className='ms-2' />
                            }
                            <select style={{ zIndex: '99' }} onInput={(e) => { setNewGender(e.target.value) }} >
                                <option value={gender}>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="avatar-modal">
                        <img src={pfp} alt={`${name} ${lastName} avatar`} />
                    </div>
                    <div className="content">
                        <input type="text" placeholder={name} className="mb-4 me-3" style={{ width: '40%', fontWeight: '500', fontSize: '1.1rem' }} onInput={(e) => { e.target.value ? setNewName(e.target.value) : setNewName(name) }} />
                        <input type="text" placeholder={lastName} style={{ width: '40%', fontWeight: '500', fontSize: '1.1rem' }} onInput={(e) => { e.target.value ? setNewLastName(e.target.value) : setNewLastName(lastName) }} />
                        <div className='d-flex align-items-center mb-3'>
                            <p className='email mb-0'><span className='bold'>Email:</span></p>
                            <input type="email" placeholder={email} className="ms-2" style={{ width: '70%' }} onInput={(e) => { e.target.value && isEmail(e.target.value) ? setNewEmail(e.target.value) : setNewEmail(email) }} />
                        </div>
                        <div className='d-flex align-items-center mb-4'>
                            <p className='country mb-0'><span className='bold'>Country:</span></p>
                            <input type="text" placeholder={country} className="ms-2" style={{ width: '70%' }} onInput={(e) => { e.target.value ? setNewCountry(e.target.value) : setNewCountry(country) }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn-add-form col-11" onClick={() => { handlePut(id, editedPerson); setModal(false) }}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}