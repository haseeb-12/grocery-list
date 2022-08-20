import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
function List({ items, removeItem, editItem }) {

    return (
        <div className='grocery-list'>
            {items.map((item) => {
                const { id, title } = item

                return (
                    <article key={id} className='grocery-item'>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                                <FontAwesomeIcon icon={faEdit} />
                                <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </button>
                        </div>

                    </article>
                )
            })}
        </div>
    )
}

export default List