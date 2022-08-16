import { Person } from "../Person";

export const PeopleList = ({ people }) => {
    return (
        <>
            <div>
                {people.map(person => {
                    return (
                        <>
                            <div>
                                <Person person={person} />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}