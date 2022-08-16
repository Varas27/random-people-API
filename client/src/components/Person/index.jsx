import { Card } from "../Card";

export const Person = ({ person }) => {
    return (
        <>
            <Card name={person.name.first} country={person.location.country} age={person.dob.age} email={person.email}/>
        </>)
}