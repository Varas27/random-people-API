import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/peopleList')
            .then(response => setData(response.data.results))

    }, [])
    
    return (
        <>
            <PeopleList people={data}/>
        </>
    )
}