import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItem({newItem,setNewItem,handleSubmit}) {
  return (
    <form action='addform' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add a Item</label>
        <input
        autoFocus 
         
        id='addItem'
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) =>setNewItem(e.target.value)}//control inputs
        />
        <button
           type='submit'
           aria-label='Add Item'
        >
          <FaPlus />
        </button>
    </form>
  )
}

export default AddItem