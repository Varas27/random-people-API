import './styles.css'
import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { isEmail } from 'validator';

export const Form = ({ handlePost, paginate }) => {

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

    const [renderForm, setRenderForm] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [handleInvalid, setHandleInvalid] = useState(false);

    const finishForm = (e, person) => {
        e.preventDefault();
        handlePost(person);
        paginate(1);
        setHandleInvalid(false);
        setRenderForm(false);
        setGender('');
        setName('');
        setLastName('');
        setPfp('');
        setEmail('');
        setAge(0);
        setCountry('');
    }

    useEffect(() => {
        if (gender && name && lastName && pfp && isEmail(email) && age && country) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }, [gender, name, lastName, pfp, email, age, country]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [renderForm])

    return (
        <>
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={200} animationOutDuration={200} animateOnMount={false} isVisible={renderForm}>
                <div className="form-background d-flex justify-content-center align-items-center my-4" style={{ height: `${renderForm ? '100%' : '0px'}`, transition: 'height .15s' }}>
                    <div className='form'>
                        <form id="form-person">
                            <div className="row">
                                <div className="form-group col-sm-6 col-lg-5">
                                    <label htmlFor='name'>Name</label>
                                    <input type="text" value={name} className={`form-control ${handleInvalid ? !name ? 'invalid' : 'valid' : null}`} id="name" required onInput={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="form-group col-sm-6 col-lg-5">
                                    <label htmlFor='lastname'>Last name</label>
                                    <input type="text" value={lastName} className={`form-control ${handleInvalid ? !lastName ? 'invalid' : 'valid' : null}`} id="lastname" required onInput={(e) => { setLastName(e.target.value) }} />
                                </div>
                                <div className="form-group col-sm-6 col-lg-2">
                                    <label htmlFor='age'>Age</label>
                                    <input type="number" value={age === 0 ? '' : age} className={`form-control ${handleInvalid ? !age ? 'invalid' : 'valid' : null}`} id="age" required onInput={(e) => { setAge(parseInt(e.target.value)) }} />
                                </div>
                                <div className="form-group col-sm-6 col-lg-3">
                                    <label className='w-100'>Gender</label>
                                    <div className="mt-1">
                                        <input type="radio" checked={gender === 'male'} id="genderChoice1" className={`me-1 ${handleInvalid ? !gender ? 'invalid' : gender !== 'male' ? '' : 'valid' : null}`} name="gender" value="male" onChange={(e) => { setGender(e.target.value) }} />
                                        <label htmlFor="genderChoice1">Male</label>
                                        <input type="radio" id="genderChoice2" checked={gender === 'female'} className={`ms-3 me-1 ${handleInvalid ? !gender ? 'invalid' : gender !== 'female' ? '' : 'valid' : null}`} name="gender" value="female" onChange={(e) => { setGender(e.target.value) }} />
                                        <label htmlFor="genderChoice2">Female</label>
                                    </div>
                                </div>
                                <div className="form-group col-sm-6 col-lg-5">
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" value={email} className={`form-control ${handleInvalid ? !isEmail(email) ? 'invalid' : 'valid' : null}`} id="email" required onInput={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="form-group col-sm-6 col-lg-4">
                                    <label htmlFor='country'>Country</label>
                                    <input type="text" value={country} className={`form-control ${handleInvalid ? !country ? 'invalid' : 'valid' : null}`} id="country" required onInput={(e) => { setCountry(e.target.value) }} />
                                </div>
                                <div className="form-group col-sm-12">
                                    <label htmlFor='pfp'>Profile picture URL</label>
                                    <input type="text" value={pfp} className={`form-control ${handleInvalid ? !pfp ? 'invalid' : 'valid' : null}`} id="pfp" required onInput={(e) => { setPfp(e.target.value) }} />
                                </div>
                            </div>
                        </form>
                        <div className="row justify-content-center">
                            <button className="btn-add-form col-11 col-md-4 col-xl-3 mx-3 mb-4 mb-md-0" onClick={enabled ? (e) => { finishForm(e, person) } : () => setHandleInvalid(true)}>Add</button>
                            <button type="button" className="btn-close-form col-11 col-md-4 col-xl-3 mx-3 btn-disable" onClick={() => setRenderForm(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </Animated>
            <div className="d-flex">
                <button className={`btn-open-form ms-auto ${renderForm ? 'disabled' : ''}`} disabled={renderForm ? true : false} onClick={() => setRenderForm(true)}>Add a new person</button>
            </div>
        </>
    )
}