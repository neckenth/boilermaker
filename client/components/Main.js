import React from 'react'
import connect from 'react-redux'
import fetchUsers from '../reducers/userReducer'
import fetchPuppies from '../reducers/puppyReducer'
import fetchKittens from '../reducers/kittenReducer'
import { Route, Link, Switch } from 'react-router-dom'

class AllPets extends React.Component {
    constructor() {
        super()
        this.state = this.props
    }

    componentDidMount() {
        this.props.loadUsers
        this.props.loadPuppies
        this.props.loadKittens
    }

    render() {
        return (
            <div>
                <nav>
                    <button type="button"><Link to='/puppies'>View All Puppies</Link></button>
                    <button type="button"><Link to='/kittens'>View All Kittens</Link></button>
                    <button type="button"><Link to={`/users/${user.id}`}>View My Account</Link></button>
                </nav>
                <main>
                <h1>Meet all our pets!</h1>

          <Switch>
            <Route exact path="/puppies/:puppyId" component={OnePet} />
            <Route
            exact path="/puppies"
            render={(props) => <AllPuppies {...props} puppies={this.props.puppies} />} />
            <Route exact path="/kittens/:kittenId" component={OnePet} />
            <Route
            exact path="/kittens"
            render={(props) => <AllKittens {...props} kittens={this.props.kittens} />} />
            <Route exact path="/" component={AllPets} />
            <Route
            exact path={`/users/${user.id}`} />
            {/* // render={(props) => <AllUsers {...props} users={this.props.users} />} /> */} */}
          </Switch>
        </main>
            </div>
        )
    }
}

mapStateToProps = (state) => {
    return {
        users: state.users,
        puppies: state.puppies,
        kittens: state.kittens
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => dispatch(fetchUsers),
        loadPuppies: () => dispatch(fetchPuppies),
        loadKittens: () => dispatch(fetchKittens)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(allPets)

