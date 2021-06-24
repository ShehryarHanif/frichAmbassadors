import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(""); // The default value is taken as "''".
    const [enteredAmount, setEnteredAmount] = useState(""); // The default value is taken as "''".
    const [enteredDate, setEnteredDate] = useState(""); // The default value is taken as "''".

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // You want to avoid a new page loading.

        const expenseData = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    } 

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={ enteredTitle } onChange={ titleChangeHandler }/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={ enteredAmount } onChange={ amountChangeHandler }/>
                </div>
                
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" ma="2020-12-31" value={ enteredDate } onChange={ dateChangeHandler }/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={ props.onCancel }>Cancel</button>

                {/* <button type="submit" onClick={ submitHandler }>Add Expense</button> */}

                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;