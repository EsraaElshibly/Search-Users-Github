import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {

    return (

        <div className="header">
            <div className='container'>
                <div className='head row '>
                    <div className='header-info col-12'>
                        <h2>Coligo Challange</h2>
                        <p>This is first task in Coligo, And wish for this company more success </p>
                    </div>


                    <div className="header-btn row">
                        <div className='col-md-6 col-12'></div>
                        <div className='col-md-4 col-12 bttn'>
                            <Link to={'/'} className = "btn btn-outline-primary active" data-bs-toggle="button" aria-pressed="false" autoComplete="off">Home</Link>
                            <Link to={'/github'} className = "btn btn-outline-primary" data-bs-toggle="button" aria-pressed="false" autoComplete="off">Github</Link>
                            <Link to={'/drag'} className = "btn btn-outline-primary" data-bs-toggle="button" aria-pressed="false" autoComplete="off">Drag and Drop</Link>
                        </div>
                        <div className='col-md-2 col-12'> </div>
                    </div>
                </div>
          </div>
        </div>
      
    );
}

