import React, { Component } from 'react'
import axios from 'axios'

  export class CreateUsers extends Component {

    constructor(){
      super();
      this.state = {
        users: [],
        username: '',
        currentPage: 1,
        todosPerPage: 3
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

  async componentDidMount(){
    //this.verifyToken();
    this.getUsers();
  }
  
  //  verifyToken = async() =>{

  //  }

   getUsers = async() => {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({users: res.data});
  }


    render() {
      const { users, currentPage, todosPerPage } = this.state;

      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = users.slice(indexOfFirstTodo, indexOfLastTodo);

      
      // this.state.users.map(users => 

      const renderTodos = currentTodos.map(user => {

        return <li className="list-group" key={user.id}>{user.username}</li>;
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(users.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }

    


  // async componentDidMount(){
  //   this.getUsers();
  // }

  // onChangeUsername = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
    
  // }

  // onSubmit = async e => {
  //   e.preventDefault()
  //   await axios.post('http://localhost:4000/api/users',{
  //       username: this.state.username
  //   })
  //   this.setState({username: ''})
  //   this.getUsers();
  // }

  //  getUsers = async() => {
  //   const res = await axios.get('http://localhost:4000/api/users');
  //   this.setState({users: res.data});
  // }
  
  // deleteUser = async (id) => {
  //   // console.log(id)
  //   await axios.delete('http://localhost:4000/api/users/' + id)
  //   this.getUsers();
  // }
  // render() {
  //         return (
  //             <div className="row">
  //                 <div className="col-md-4">
  //                   <div className="card card-body">
  //                     <h3>Create New User</h3>
  //                     <form onSubmit={this.onSubmit}>
  //                       <div className="form-group">
  //                         <input 
  //                         type="text" 
  //                         className="form-control" 
  //                         value={this.state.username}
  //                         onChange={this.onChangeUsername} 
  //                         />
  //                       </div>
  //                     </form>
  //                   </div>
                     
  //                 </div>
  //                 <div className="col-md-8">
  //                   <ul className="list-group">
  //                     {
  //                       this.state.users.map(users => 
  //                       <li 
  //                       className="list-group-item list-group-item-action" 
  //                       key={users._id}
  //                       onDoubleClick={() => this.deleteUser(users._id)}
  //                       >
  //                           {users.username}
  //                          </li>)
  //                     }
  //                   </ul>
  //                 </div>
  //             </div>
  //         )
  //     }
  // }
  
  export default CreateUsers