import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const showActiveUser = searchParam.get('filter') === 'active'

    return (
        <div>
            <h3>User 1</h3>
            <h3>User 2</h3>
            <h3>User 3</h3>
            <Outlet />
            <div>
                <button onClick={() => setSearchParam({ filter: 'active' })}>Active User</button>
                <button onClick={() => setSearchParam({})}>Reset Filter</button>
            </div>
            {
                showActiveUser ? <p>Showing Active User</p> : <p>Showing all users</p>
            }
        </div>
    )
}