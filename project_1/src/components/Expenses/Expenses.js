import {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (year) =>{
        setSelectedYear(year);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter
                yearValue = {selectedYear} 
                onFilterChange = {filterChangeHandler}/>
            {props.expenses.map(el =>( 
                <ExpenseItem
                    date={el.date}
                    title={el.title}
                    amount={el.amount}/>))}
        </Card>
    );
}

export default Expenses;
