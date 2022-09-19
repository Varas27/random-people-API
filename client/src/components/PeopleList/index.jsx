import { NoResults } from "../NoResults";
import { Person } from "../Person";

export const PeopleList = ({ people, handleDelete, handlePut }) => {
    return (
        <>
            <div className="container people-list">
                <div className="row justify-content-center">
                    {people.length > 0 ?
                        people.map((person) => {
                            return (
                                <Person person={person} key={person.id} handleDelete={handleDelete} handlePut={handlePut} />
                            )
                        })
                        :
                        <NoResults />
                    }
                </div>
            </div>
        </>
    )
}