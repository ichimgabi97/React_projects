import {useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () =>{
    const [usersList, setUsersList] = useState([]);

    const userAddHandler = (user)=>{
        setUsersList(prevUsersList => (
            [...prevUsersList, user]
        ));
    }

    return(
        <>
            <AddUser onUserAdd = {userAddHandler}/>
            {usersList.length > 0 && <UsersList users={usersList}/>}
        </>
    );
};

export default App;