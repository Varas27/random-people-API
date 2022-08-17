import { Card } from "../Card";

export const Person = ({ person }) => {
    return (
        <>
            <Card name={person.name.first} lastname={person.name.last} country={person.location.country} age={person.dob.age} email={person.email} pfp={person.picture.large} gender={person.gender}/>
        </>
    )
}