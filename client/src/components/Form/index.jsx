import './styles.css'
import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";

export const Form = ({ handleSubmit }) => {

    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pfp, setPfp] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');

    let person = {
        gender,
        name,
        lastName,
        pfp,
        email,
        age,
        country
    }

    const [modal, setModal] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const finishForm = () => {
        setModal(false);
        setGender('');
        setName('');
        setLastName('');
        setPfp('');
        setEmail('');
        setAge(0);
        setCountry('');
    }

    useEffect(() => {
        if (gender && name && lastName && pfp && email && age && country) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }, [gender, name, lastName, pfp, email, age, country])

    return (
        <>
            {modal ?
                <>
                    <div className="modal-background d-flex justify-content-center align-items-center mt-4">
                        <Animated animationIn="fadeInDown" animationInDuration={200} isVisible={modal}>
                            <div className="modal-form">
                                <form id="form-person">
                                    <div className="row">
                                        <div className="form-group col-sm-6 col-lg-5">
                                            <label htmlFor='name'>Name</label>
                                            <input type="text" className="form-control" id="name" required onInput={(e) => { setName(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-sm-6 col-lg-5">
                                            <label htmlFor='lastname'>Last name</label>
                                            <input type="text" className="form-control" id="lastname" required onInput={(e) => { setLastName(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-sm-6 col-lg-2">
                                            <label htmlFor='age'>Age</label>
                                            <input type="number" className="form-control" id="age" required onInput={(e) => { setAge(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-sm-6 col-lg-3">
                                            <label className='w-100'>Gender</label>
                                            <div className="mt-1">
                                                <input type="radio" id="genderChoice1" className="me-1" name="gender" value="male" onInput={(e) => { setGender(e.target.value) }} />
                                                <label for="genderChoice1">Male</label>
                                                <input type="radio" id="genderChoice2" className="ms-3 me-1" name="gender" value="female" onInput={(e) => { setGender(e.target.value) }} />
                                                <label for="genderChoice2">Female</label>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-6 col-lg-5">
                                            <label htmlFor='email'>Email</label>
                                            <input type="email" className="form-control" id="email" required onInput={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-sm-6 col-lg-4">
                                            <label htmlFor='country'>Country</label>
                                            <input type="text" className="form-control" id="country" required onInput={(e) => { setCountry(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label htmlFor='pfp'>Profile picture URL</label>
                                            <input type="text" className="form-control" id="pfp" required onInput={(e) => { setPfp(e.target.value) }} />
                                        </div>
                                    </div>
                                </form>
                                <div className="row justify-content-center">
                                    <button className="btn-add-form col-11 col-md-4 col-xl-3 mx-3 mb-4 mb-md-0" onClick={enabled ? (e) => { handleSubmit(e, person); finishForm() } : null}>Add</button>
                                    <button type="button" className="btn-close-form col-11 col-md-4 col-xl-3 mx-3 btn-disable" onClick={() => setModal(false)}>Close</button>
                                </div>
                            </div>
                        </Animated>
                    </div>
                </>
                :
                null
            }
            <div className="d-flex">
                <button className={`btn-open-form mt-4 ms-auto ${modal ? 'disabled' : ''}`} disabled={modal ? true : false} onClick={() => setModal(true)}>Add a new person</button>
            </div>
        </>
    )
}