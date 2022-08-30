import { Person } from "../Person";

export const PeopleList = ({ people }) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {people.map((person, i) => {
                        return (
                            <Person person={person} key={i} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}