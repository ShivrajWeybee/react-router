import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'black',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }

    const auth = useAuth();
    console.log(auth);

    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
            {
                !auth.user && <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
            }
        </nav>
    )
}
