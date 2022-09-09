import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loading } from "../../components/Loading";
import { Form } from '../../components/Form';
import { Sorting } from "../../components/Sorting";
import { Search } from "../../components/Search";

const apiUrl = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT || 8080}` : 'https://random-people-varas.herokuapp.com';

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleSort, setToggleSort] = useState({ order: false, property: 'default' });
    const [search, setSearch] = useState('')

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

    const handlePost = (e, object) => {
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

    const handleDelete = id => {
        try {
            axios.delete(apiUrl + '/api/peopleList/delete/' + id)
                .then(response => {
                    setData(response.data)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const handlePut = (id, editedPerson) => {
        try {
            axios.put(apiUrl + '/api/peopleList/put/' + id, editedPerson)
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
                setToggleSort({ ...toggleSort, order: false, property: property })
                return a[property] < b[property] ? 1 : -1
            } else {
                setToggleSort({ ...toggleSort, order: true, property: property })
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
                        <Form handlePost={handlePost} />
                        <div className="filters-bar mt-3">
                            <Sorting handleSort={handleSort} sort={toggleSort} />
                            <Search search={search} setSearch={setSearch} />
                        </div>
                        {
                            !search ?
                                <PeopleList people={data} handleDelete={handleDelete} handlePut={handlePut} />
                                :
                                <PeopleList people={data.filter(person => `${person.name.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(search.toLowerCase()))} handleDelete={handleDelete} handlePut={handlePut} />
                        }
                    </>
            }
        </>
    )
}