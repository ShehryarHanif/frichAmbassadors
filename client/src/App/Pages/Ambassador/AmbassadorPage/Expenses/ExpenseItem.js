// import { useState } from "react";

import "./ExpensiveItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 28);

    // const expenseTitle = "Car Insurance";

    // const expenseAmount = 25;

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle("CLICKED TITLE");

    //     console.log("Clicked!");
    // }

    return (
        <li>
            <Card className="expense-item">
                {/* <div>{ props.date.toISOString() }</div> */}

                <ExpenseDate date={ props.date }/>
                
                <div className="expense-item__description">
                    <h2>{ props.title }</h2>
                    <div className="expense-item__price">${ props.amount }</div>
                </div>

                {/* <button onClick={ clickHandler }>BUTTON TEST</button> */}
            </Card>
        </li>
    ); // We return a list item for semantic reasons due to the "ExpensesList" component. It does not change things visually but it makes semantic sense.
}

export default ExpenseItem;