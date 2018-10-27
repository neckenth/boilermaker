import React from 'react'
import {postPuppy, postKitten} from '../store'
import connect from 'react-redux';

class AddPetForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pet: this.props.pet,
            name: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let name = event.target.name;
        let age = event.target.age;
        this.setState({name, age})
    }

    handleSubmit(event) {
        event.preventDefault()
        const newPet = {
            name: this.state.name,
            age: this.state.age
        }
        this.state.pet === 'puppy' ? dispatch(addPuppy(newPet)) : dispatch(addKitten(newPet))
        this.setState({
            pet: '',
            name: '',
            age: ''
        })
    }

    render() {
        const petType = `${this.state.pet[0].toUpperCase()}${this.state.pet.slice(1)}`
        return (
            <div>
            <h1>`Add New {petType}`</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input onChange={this.handleChange} type="text" value={this.state.name} />

                <label htmlFor='age'>Age</label>
                <input onChange={this.handleChange} type="text" value={this.state.age} />

                <button type="submit">Add {petType}</button>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPuppy: (puppy) => dispatch(postPuppy(puppy)),
        addKitten: (kitten) => dispatch(postKitten(kitten))
    }
}

export default connect(null, mapDispatchToProps)(AddPetForm)