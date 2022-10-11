import {useState} from 'react';

import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    };

    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        if(name.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if(+age < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
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

    const errorHandler = () => {
        setError(null);
    };

    return(
        <div>
            { error && <ErrorModal onConfirm = {errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" type='text' value={name} onChange={nameChangeHandler}></input>

                    <label htmlFor='age'>{`Age(Years)`}</label>
                    <input id="age" type='number' value={age} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>   
                </form>
            </Card>
        </div>
    );
};

export default AddUser;