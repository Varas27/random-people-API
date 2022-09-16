import { PeopleList } from "../../components/PeopleList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loading } from "../../components/Loading";
import { Form } from '../../components/Form';
import { Sorting } from "../../components/Sorting";
import { Search } from "../../components/Search";
import { Pagination } from './../../components/Pagination';

const apiUrl = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT || 8080}` : 'https://random-people-varas.herokuapp.com';

export const PeopleListContainer = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleSort, setToggleSort] = useState({ order: false, property: 'default' });
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [peoplePerPage] = useState(6);

    /// Handle CRUD with Axios

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

    const handlePost = person => {
        try {
            axios.post(apiUrl + '/api/peopleList/post', person)
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
    
    useEffect(() => {
        fetchData();
    }, [])

    /// Sorting

    const handleSort = (property) => {
        const sortedData = [...data].sort((a, b) => {
            if (toggleSort.order) {
                setToggleSort({ order: false, property: property })
                return a[property] < b[property] ? 1 : -1
            } else {
                setToggleSort({ order: true, property: property })
                return a[property] > b[property] ? 1 : -1
            }
        })
        setData(sortedData);
    }

    /// Pagination

    const indexOfLastPerson = currentPage * peoplePerPage;
    const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) }

    useEffect(() => {
        paginate(1)
    }, [search])

    // Data to show with pagination
    const currentPeople = data.slice(indexOfFirstPerson, indexOfLastPerson);

    // Data to show with pagination while using the search bar
    const filteredPeople = data.filter(person => `${person.name.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(search.toLowerCase()));
    const currentFilteredPeople = filteredPeople.slice(indexOfFirstPerson, indexOfLastPerson);

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
                                <PeopleList people={currentPeople} handleDelete={handleDelete} handlePut={handlePut} />
                                :
                                <PeopleList people={currentFilteredPeople} handleDelete={handleDelete} handlePut={handlePut} />
                        }
                        <Pagination peoplePerPage={peoplePerPage} totalPeople={!search ? data.length : filteredPeople.length} paginate={paginate} currentPage={currentPage}/>
                    </>
            }
        </>
    )
}