import React from 'react'
import './ProfileItem.css'
function Profileitem({ profil, handleClick }) {

    return (
        <tr className='style'>
            <td><button onClick={() => handleClick(profil.fullName)}>button</button></td>
            <td>{profil.fullName}</td>
            <td>{profil.bio}</td>
            <td>{profil.profession}</td>
        </tr>
    )
}

export default Profileitem
