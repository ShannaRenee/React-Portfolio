import React from 'react'
import Nav from '../Nav'

const Header = ({pages, currentPage, setCurrentPage}) => {
  return (
    <header>
      {/* <img /> */}
      <div className='container d-lg-flex justify-content-lg-between'>
        <h1 className='text-center'>Shanna Morris</h1>
        <Nav 
        pages={pages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  )
}

export default Header