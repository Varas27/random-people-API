import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loading } from "../../components/Loading";
import { Form } from '../../components/Form';

const apiUrl = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT || 8080}` : 'https://random-people-varas.herokuapp.com';

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const handleSubmit = (e, object) => {
        e.preventDefault();
        axios.post(apiUrl + '/api/peopleList/post', object);
    }

    useEffect(() => {
        axios.get(apiUrl + '/api/peopleList')
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
    }, [data])

    return (
        <>
            {
                isLoading ?
                    <div className="loading">
                        <Loading />
                    </div>

                    :
                    <>
                        <Form handleSubmit={handleSubmit} />
                        <PeopleList people={data} />
                    </>
            }
        </>
    )
}