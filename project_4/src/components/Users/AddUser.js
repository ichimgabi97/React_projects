import {useState} from 'react';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    };

    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        if(name.trim().length === 0 || age.trim().length === 0){
            return;
        }

        if(age < 1){
            return;
        }

        props.onUserAdd({
            name: name,
            age: age,
            id: Math.random().toString()
        });

        setName('');
        setAge('');
    };

    return(
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type='text' value={name} onChange={nameChangeHandler}></input>

                <label htmlFor='age'>{`Age(Years)`}</label>
                <input id="age" type='number' value={age} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>   
            </form>
        </Card>
    );
};

export default AddUser;