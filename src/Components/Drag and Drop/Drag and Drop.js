
import React, { useState } from 'react'
import './Drag.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function Drag() {
    const list = ['1', '2', '3' ,'4']
    const [itemList, setItemList] = useState(list)

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return
        var updatedList = [...itemList]

        const [reOrderdItems] = updatedList.splice(droppedItem.source.index, 1)
        updatedList.splice(droppedItem.destination.index, 0, reOrderdItems)

        setItemList(updatedList)
    }
    return(
        <div className='drag-list container'>
            <div className='row'>
                <div className='col-12'>
                    <DragDropContext onDragEnd = {handleDrop} >
                        <h2>Drag and Drop List</h2>
                        <Droppable droppableId = 'list-container'>
                            {(provided) => (
                                <div 
                                    className='list-container'
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {itemList.map((item, index) => (
                                        <Draggable key={item} draggableId={item} index={index}>
                                            {(provided) => (
                                                <div 
                                                    className='item-container'
                                                    ref={provided.innerRef}
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                > {item} </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                </div>
        </div>
    )
}

