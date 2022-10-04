import {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (year) =>{
        setSelectedYear(year);
    };

    const filteredExpenses = props.expenses.filter(el => el.date.getFullYear().toString() === selectedYear);

    

    return(
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    yearValue = {selectedYear} 
                    onFilterChange = {filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items = {filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;
