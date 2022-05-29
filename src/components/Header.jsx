import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header_wrapper'>
     <div className='header_logo'>
       <i className="fa fa-btc fa-4x" aria-hidden="true"></i>
       </div>
       <div className='header_link'>
       <Link to='/'>Конвертатор</Link>
       <Link to='/Portfolio'>Портфель</Link>
       </div>
    

    </div>
  )
}

export default Header