import React, { Component } from 'react'
import axios from 'axios'

export class Signup extends Component {

    constructor(){
        super();
        this.state = {
            username:'',
            email: '',
            password: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
           

    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:4000/signup', newUser);
        //window.location.href = '/';
        
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
            <div className="card card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control" 
                    onChange={this.onInputChange}
                    placeholder="Username" 
                    name="Username"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control" 
                    onChange={this.onInputChange}
                    placeholder="Email" 
                    name="Email"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control" 
                    onChange={this.onInputChange}
                    placeholder="Password" 
                    name="Password"
                    required
                    />
                </div>
                
                <div 
                className="btn-group"
                onSubmit={this.onSubmit}>
                    <button type="submit" className="btn-primary">
                        Sign Up
                    </button>
                </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Signup;