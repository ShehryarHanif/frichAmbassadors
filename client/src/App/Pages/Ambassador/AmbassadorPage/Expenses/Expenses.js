import { useState } from "react";

import "./Expenses.css";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterEventHandler = (filterYear) => setFilteredYear(filterYear);

    const filteredExpenses = props.expenseItems.filter((singleExpense) => singleExpense.date.getFullYear().toString() === filteredYear);

    // let expensesContent = <p>No Expenses Found</p>

    // if(filteredExpenses.length > 0){
    //     expensesContent = filteredExpenses.map((expense, index) => <ExpenseItem key={ index } title={ expense.title } amount={ expense.amount } date={ expense.date } />);
    // }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={ filteredYear } onFilterEvent={ filterEventHandler }/>
            
            {/* { filteredExpenses.length === 0 ? 
                (<p>No Expenses Found</p>)
                :
                (filteredExpenses.map((expense, index) => <ExpenseItem key={ index } title={ expense.title } amount={ expense.amount } date={ expense.date } />))
            } */}

            {/* { filteredExpenses.length === 0 && (<p>No Expenses Found</p>) }
            
            { filteredExpenses.length > 0 && (filteredExpenses.map((expense, index) => <ExpenseItem key={ index } title={ expense.title } amount={ expense.amount } date={ expense.date } />)) } */}

            {/* { expensesContent } */}

            <ExpensesChart requiredData={ filteredExpenses } />

            <ExpensesList expenses={ filteredExpenses }/>
        </Card>
    )
}

export default Expenses;