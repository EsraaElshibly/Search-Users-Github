import React from 'react';
import DragList from './Drag and Drop';
import './Drag.css'

export default function CardList() {

    const data = [
        {title: 'Group 1', items: ['List 1','List 2', 'List 3']},
        {title: 'Group 2', items: ['List 4','List 5', 'List 6']},
    ]


    return (
        <div className='cardList container'>
            <DragList data= { data } />
        </div>
    )
}



