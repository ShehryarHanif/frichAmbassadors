import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if(props.expenses.length === 0){
        return (
            <h2 className="expenses-list__fallback">Found No Expenses</h2>
        );
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expense, index) => <ExpenseItem key={ index } title={ expense.title } amount={ expense.amount } date={ expense.date } />)}
        </ul>
    );
}

export default ExpensesList;