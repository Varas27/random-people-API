import { NoResults } from "../NoResults";
import { Person } from "../Person";

export const PeopleList = ({ people }) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {people.length > 0 ?
                        people.map((person, i) => {
                            return (
                                <Person person={person} key={i} />
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