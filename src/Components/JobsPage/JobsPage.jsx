import React from 'react'
import './JobsPage.css'
import Navbar from '../Navbar/Navbar.jsx'
import Jobs from '../Jobs/Jobs.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function JobsPage() {
  return (
    <>
      {/* <Navbar/> */}
      <div className='container' id="jobs">
        <div className='search-area'>
          <div className='search-top'>
            <p>Experience</p>
            <p>Experience</p>
            <p>Experience</p>
          </div>
          <div className='search-down'>
            <FontAwesomeIcon id="fontAw" icon={faMagnifyingGlass}></FontAwesomeIcon>
            <input type='text-area'></input>
          </div>
        </div>
        <div className='jobs-container'>
          <Jobs/>
          <Jobs/>
          <Jobs/>
          <Jobs/>
        </div>
      </div>
    </>
  )
}

export default JobsPage