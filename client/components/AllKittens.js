import React from 'react';
import {Link} from 'react-router-dom'
import AddPetForm from './AddPetForm';

export default AllKittens = (props) => {
    return (
        <div>
            <ul>
                {props.kittens.map(elem => <li key={elem.id}><Link to={`/kittens/${elem.id}`}>{elem.name}</Link></li>)}
            </ul>
            <AddPetForm pet='kitten' />
        </div>
    )
}