import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    console.log('hi')
    return (
        <div>
            <h3>Welcome {auth.user}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
