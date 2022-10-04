import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';


const ExpensesList = (props) =>{
    
    if(props.items.length === 0){
        return(
            <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        );
    }

    return (
        <ul className="expenses-list">
            {props.items.map(el => ( 
            <ExpenseItem
                key={el.id}
                date={el.date}
                title={el.title}
                amount={el.amount}/>))}
        </ul>
    );
};

export default ExpensesList;