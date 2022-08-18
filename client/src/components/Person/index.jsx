import { Card } from "../Card";

export const Person = ({ person }) => {
    return (
        <>
            <Card name={person.name} lastname={person.lastName} country={person.country} age={person.age} email={person.email} pfp={person.pfp} gender={person.gender}/>
        </>
    )
}