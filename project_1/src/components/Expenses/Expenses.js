import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {

    return(
        <Card className="expenses">
            {props.expenses.map(el => <ExpenseItem
                                        date={el.date}
                                        title={el.title}
                                        amount={el.amount}/>)}
        </Card>
    );
}

export default Expenses;
