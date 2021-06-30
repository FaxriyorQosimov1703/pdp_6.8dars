import React, { Component } from 'react'

export default class App extends Component {
    state = {
        users: []
    }
    componentDidMount() {
       const users = [
            {
                name: 'Faxriyor',
                age: 21,
                job: 'web developer'

            },
            {
                name: 'Oysanam',
                age: 20,
                job: 'tarjimon'

            },
            {
                name: 'Farrux',
                age: 21,
                job: 'bekorchi'

            },
            {
                name: 'palancha',
                age: 213,
                job: 'toza havoga xujayin'

            }
        ]
        this.setState({
            users: users
        })
    }

    onClickRemove = (index) => {
        this.state.users.splice(index, 1)
        this.setState({
            users: this.state.users
        })
    }
    render() {
        const {users} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="table">
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Job</th>
                                    <th>remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((type, index) => 
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{type.name}</td>
                                            <td>{type.age}</td>
                                            <td>{type.job}</td>
                                            <td><button className="btn btn-danger" onClick={() => this.onClickRemove(index)}>remove</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
