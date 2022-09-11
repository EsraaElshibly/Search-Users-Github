import React from 'react'
import { Link } from 'react-router-dom'

export default function Users ({user}) {
    const {avatar_url, login, id} = user
    return (
        <div className='col-12 card'>
            <img src={avatar_url} alt='Github User' />
            <h4>{login}</h4>
            <small>{id}</small>
            <Link to={`/user/${login}`}> View Profile </Link>
        </div>
    )
}