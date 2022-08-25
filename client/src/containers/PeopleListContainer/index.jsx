import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loading } from "../../components/Loading";
import { Form } from '../../components/Form';
import { Sorting } from "../../components/Sorting";

const apiUrl = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT || 8080}` : 'https://random-people-varas.herokuapp.com';

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleSort, setToggleSort] = useState(false)

    const fetchData = () => {
        try {
            axios.get(apiUrl + '/api/peopleList')
                .then(response => {
                    setData(response.data);
                    setIsLoading(false);
                })
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = (e, object) => {
        try {
            e.preventDefault();
            axios.post(apiUrl + '/api/peopleList/post', object)
                .then(response => {
                    setData(response.data)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            if (toggleSort === true) {
                setToggleSort(false)
                return a.name < b.name ? 1 : -1
            } else {
                setToggleSort(true)
                return a.name > b.name ? 1 : -1
            }
        })
        setData(sortedData);
    }

    useEffect(() => {
        fetchData();
    }, [])

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
                        <Sorting handleSort={handleSort} sort={toggleSort}/>
                        <PeopleList people={data} />
                    </>
            }
        </>
    )
}