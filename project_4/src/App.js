import {useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () =>{
    const [usersList, setUsersList] = useState([]);

    const userAddHandler = (user)=>{
        setUsersList(prevUserList => (
            [...prevUserList, user]
        ));
    }

    return(
        <div>
            <AddUser onUserAdd = {userAddHandler}/>
            {usersList.length > 0 && <UsersList users={usersList}/>}
        </div>
    );
};

export default App;