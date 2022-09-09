import { Card } from "../Card";
import { useState } from 'react';
import { Modal } from "../Modal";

export const Person = ({ person, handleDelete, handlePut }) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            {
                modal ?
                    <Modal name={person.name} lastName={person.lastName} country={person.country} age={person.age} email={person.email} pfp={person.pfp} gender={person.gender} id={person.id} setModal={setModal} handlePut={handlePut} />
                    :
                    true
            }
            <Card name={person.name} lastName={person.lastName} country={person.country} age={person.age} email={person.email} pfp={person.pfp} gender={person.gender} id={person.id} handleDelete={handleDelete} setModal={setModal} />
        </>
    )
}