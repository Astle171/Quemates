import React, { Component } from 'react';
import { getUsers } from '../../services/userService';

class users extends Component {
    state={
        users:[]
    }

    async componentDidMount(){
        try{
            const {data:users}= await getUsers();
            this.setState({users})
        }
        catch(ex){
            console.log(ex)
        }
        
    }






    render() {
        const { length: count } = this.state.users;
        const {users:allUsers,currentPage,pageSize} = this.state;
        return (
            <div>
                 <p>Showing {count} users in the database.</p>
            </div>
        );
    }
}

export default users;