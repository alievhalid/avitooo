import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Modal from './Modal'
import Users from './Users'
function Content() {
    const loading = useSelector(state => state.users.loading)
    
    return (
        <div className="content">
            {loading ? 'идет загрузка ' : <Users />}
            <Route path="/:id">
                <Modal />
            </Route>
        </div>
    )
}

export default Content
