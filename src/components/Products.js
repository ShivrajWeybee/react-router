import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Products = () => {
    const productNavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'black',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }
    return (
        <>
            <div>
                <input type='search' placeholder='search products..' />
            </div>
            <nav className='secondary-nav'>
                <NavLink style={productNavLinkStyle} to='featured'>Featured</NavLink>
                <NavLink style={productNavLinkStyle} to='new'>New</NavLink>
            </nav>
            <Outlet />
        </>
    )
}