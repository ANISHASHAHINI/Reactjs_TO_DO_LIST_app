import React from 'react'
import './index.css';

const Footer = ({length}) => {

  return (
    /*Copyfight &copy; {year.getFullYear()}  - for copy right board*/
    <footer>{length} List {length === 1 ? "Item" : "Items"}</footer>
  )
}

export default Footer