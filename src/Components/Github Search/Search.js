import React, { useState } from 'react'
import axiosInstance from '../AxiosConfig/axiosConfig';
import './Search.css'
import Users from './User';

export default function SearchInput () {

    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([])

    const handleQueryInput = (e) => {
        const value = e.target.value
        setQuery(value)
    }

    const getUsers = async () => {
        try{
            const { data } = await axiosInstance
            .get('/search/users?q=' + query)
            return data?.items
        }
        catch(error) {
            console.log(error);
            return null
        }
    }

    const handleSearchUsers = async (e) => {
        e.preventDefault()
        if (query)
        {
            const items = await getUsers()
            setUsers(items)
        }
        else {
            console.log("You don't search");
        }
    }

    return (
        <div className='container search-form'>
            <div className='row'>
                <div className="mb-3 col-12">
                    <div className='search-heading'>
                        <h3>Search For Github Users</h3>
                    </div>
                    <form className='search'>
                        <label htmlFor="search-form" className="form-label"></label>
                        <input 
                            type="search" 
                            className="form-control" 
                            name="search-form" 
                            id="search-form" 
                            placeholder="Search for github user..." 
                            // value={inputTxt} 
                            onChange={handleQueryInput} 
                        />
                        <button className='btn btn-primary' onClick={handleSearchUsers}>Search</button>
                    </form>

                    {/* Github User Card */}
                    {users ? users.map(user => {
                        return <Users user={user} key={user.id} />
                    }) : ( <h2>Nothing To display,, Search for any User to Display cards</h2>) }
                </div>
            </div>
        </div>
    );
};