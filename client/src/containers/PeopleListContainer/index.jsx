import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT || 8080}` : 'https://random-people-varas.herokuapp.com'

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl+'/api/peopleList')
            .then(response => setData(response.data.results))
    }, [])

    return (
        <>
            <PeopleList people={data} />
        </>
    )
}