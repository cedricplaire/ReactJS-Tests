import React, { Component } from 'react';
import Axios from 'axios';

/* const users = [
    {
        id: 1,
        nom: 'Cédric',
        email: 'againmusician@gmail.com',
        password: 'BebShow',
    },
    {
        id: 2,
        nom: 'Yohan',
        email: 'tontonyohan@gmail.com',
        password: 'TonYo',
    },
    {
        id: 3,
        nom: 'Rémis',
        email: 'remiair@gmail.com',
        password: 'RemiAir',
    },
]; */

const API_URL = 'https://jsonplaceholder.typicode.com/users/';

const KEYWORD = 'John';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUser: 2,
            currentUser: [],
            isLoaded: false,
            searchUser: KEYWORD,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    fetchUsers() {
        Axios(`${API_URL}${this.state.selectedUser}`)
            .then(result => this.setState({ currentUser: result.data }))
            .catch(error => this.setState({ error }));
    }

    changeUser(user) {
        this.setState({ currentUser: user });
    }

    handleChange(event) {
        this.setState({ selectedUser: parseInt(event.target.value, 10) }, () =>
            this.fetchUsers(),
        );
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className="body-section">
                <h5>Section Utilisateurs !</h5>
                <div className="userpage form-group">
                    <label htmlFor="userid" className="lbl-select-user">
                        Selectionnez un utilisateur.
                    </label>
                    <select
                        name="userid"
                        id="userID"
                        ref="myselect"
                        onChange={this.handleChange}
                        value={this.state.selectedUser}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div className="form-group">
                    <div style={{ display: 'inline-block' }}>
                        <span className="badge badge-primary">
                            {' '}
                            {currentUser.id}{' '}
                        </span>
                        <h3> {currentUser.name} </h3>
                    </div>

                    <span> {currentUser.email} </span>
                    <span> {currentUser.username} </span>
                    <br />
                    <img
                        src={
                            'https://api.adorable.io/avatars/256/' +
                            currentUser.email
                        }
                        alt="Avatar"
                    ></img>
                </div>
            </div>
        );
    }
}

export default UserPage;
