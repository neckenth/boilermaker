import React from 'react';
import {Link} from 'react-router-dom'
import AddPetForm from './AddPetForm'

export default AllPuppies = (props) => {
    return (
        <div>
            <ul>
                {props.puppies.map(elem => <li key={elem.id}><Link to={`/puppies/${elem.id}`}>{elem.name}</Link></li>)}
            </ul>
            <AddPetForm pet='puppy' />
        </div>
    )
}