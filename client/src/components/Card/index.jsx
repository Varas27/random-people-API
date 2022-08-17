import './styles.css'
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';

export const Card = ({ name, lastname, country, age, email, pfp, gender }) => {
    return (
        <>
            <div className="col-11 col-md-4 col-lg-3 person-card mx-3 my-4 p-0">
                <div className="banner d-flex">
                    {gender === 'male' ?
                        <BiMaleSign size='30px' className='ms-auto m-3' color='#fff' />
                        :
                        <BiFemaleSign size='30px' className='ms-auto m-3' color='#fff' />
                    }
                </div>
                <div className="avatar">
                    <img src={pfp} alt="" className='img-fluid' />
                </div>
                <div className="content">
                    <h1 className='h5 mb-1'>{name} {lastname}</h1>
                    <p className='age'>Age: {age}</p>
                    <p className='email mb-1'><span className='bold'>Email:</span> {email}</p>
                    <p className='country mb-0'><span className='bold'>Country:</span> {country}</p>
                </div>
            </div>
        </>
    )
}