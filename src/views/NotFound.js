import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='notFound'>
            <NavLink to='/'>
            <img src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" width='600'alt="" />
            </NavLink>
        </div>
    )
}
