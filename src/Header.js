import React from 'react'
import './index.css';
export const Header = (props) => {

  return (
    <h1 >
        {props.title}
    </h1>
  )
}

Header.defaultProps = {
  title : "To do List"
}
export default Header