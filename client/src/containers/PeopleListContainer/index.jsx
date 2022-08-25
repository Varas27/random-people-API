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
    const [toggleSort, setToggleSort] = useState({ order: false, property: 'default' })

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

    const handleSort = (property) => {
        const sortedData = [...data].sort((a, b) => {
            if (toggleSort.order) {
                setToggleSort({...toggleSort, order: false, property: property})
                return a[property] < b[property] ? 1 : -1
            } else {
                setToggleSort({...toggleSort, order: true, property: property})
                return a[property] > b[property] ? 1 : -1
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
                        <Sorting handleSort={handleSort} sort={toggleSort} />
                        <PeopleList people={data} />
                    </>
            }
        </>
    )
}