import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap'
import Profileitem from '../profilitem/Profileitem'
import './Profile.css'
function Profile({ data }) {
    const handleClick = (name) => {
        alert(`the name of the profile ${name}`)
    }
    return (
        <div className='style'>
            <Table striped bordered hover size="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FullName</th>
                        <th>bio</th>
                        <th>profession</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, index) => (
                    <Profileitem
                        key={index}
                        profil={el}
                        handleClick={handleClick} />))}
                </tbody>
            </Table>
        </div >
    )
}

export default Profile
