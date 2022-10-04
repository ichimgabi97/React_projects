import {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isExpensFormVisible, setIsExpensFormVisible] = useState(false);

    const saveExpensedataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const addNewExpenseHandler = () =>{
        setIsExpensFormVisible(true);
    };

    const cancelFormHandler = () =>{
        setIsExpensFormVisible(false);
    };

    const expenseFormDisplay = isExpensFormVisible ? (
            <ExpenseForm onSaveExpenseData={saveExpensedataHandler} onCancelForm = {cancelFormHandler}/>
        ) : (
            <button onClick={addNewExpenseHandler}>Add New Expense</button>
        );

    return(
        <div className="new-expense">
            {expenseFormDisplay}
        </div>
    );
}

export default NewExpense;