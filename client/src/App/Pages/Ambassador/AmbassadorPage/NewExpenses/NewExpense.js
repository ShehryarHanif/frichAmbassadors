import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [expenseAdder, setExpenseAdder] = useState(false);
    
    const allowEditing = () => {
        setExpenseAdder(true);
    }

    const disallowEditing = () => {
        setExpenseAdder(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

        disallowEditing();
    };

    const cancelExpenseHandler = () => {
        disallowEditing();
    }

    let newExpenseContent = (<button onClick={ allowEditing }>Add New Expense</button>);

    if(expenseAdder){
        newExpenseContent = (<ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } onCancel={ cancelExpenseHandler }/>);
    }

    return (
        <div className="new-expense">
            {/* <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } onCancel={ cancelExpenseHandler }/> Note how the function is not called */}

            { newExpenseContent }
        </div>
    );
}

export default NewExpense;