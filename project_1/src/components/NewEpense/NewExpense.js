
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const saveExpensedataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpensedataHandler}/>
        </div>
    );
}

export default NewExpense;