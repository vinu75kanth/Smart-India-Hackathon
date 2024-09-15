import React from 'react'
import './Jobs.css'
import logo from '../../assets/nvidia.png'

function Jobs() {
  return (
    <div className='box'>
        <div className='top'>
            <img src={logo}></img>
            <h2>Full Stack Intern</h2>
        </div>
        <div className='down'>
            <div className='location'>
                <p>Bengaluru,</p>
                <p>Karnataka,</p>
                <p>India.</p>
            </div>
            <div className='down-box'>
                <p>On-Site</p>
                <p>Internship</p>
                <p>Stipend</p>
                <p>Rs 25,000</p>
            </div>
            <button className='apply_btn'>Apply</button>
        </div>
    </div>
  )
}

export default Jobs