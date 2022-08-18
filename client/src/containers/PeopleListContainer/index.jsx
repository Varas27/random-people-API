import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://random-people-varas.herokuapp.com'
console.log(apiUrl)

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl+'/api/peopleList')
            .then(response => setData(response.data.results))
            .then(console.log('fetched'))
    }, [])

    return (
        <>
            <PeopleList people={data} />
        </>
    )
}