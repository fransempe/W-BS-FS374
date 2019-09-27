import React, { Component } from 'react'
import axios from 'axios'

export class Signin extends Component {
   
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
           

    onSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.post('http://localhost:4000/signin', this.state)

            if(resp.data.auth){
                const me = await axios.get('http://localhost:4000/me',
                { 'headers':
                { 'x-access-token': resp.data.token }
            });
                console.log(me.data);
                this.props.history.push("/users");
            }

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
                        placeholder="Email" 
                        name="email"
                        onChange={this.onInputChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Password" 
                        name="password"
                        onChange={this.onInputChange}
                        required
                        />
                    </div>
                        <div className="btn-group">
                            <button type="submit" className="btn-primary">
                                Sign In
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
        )
    }
}

export default Signin;