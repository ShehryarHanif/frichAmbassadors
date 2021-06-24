import "./ExpenseDate.css"

function ExpenseDate(props){
    const [requiredMonth, requiredDay, requiredYear] = [props.date.toLocaleString("en-US", {month: "long"}), props.date.toLocaleString("en-US", {day: "2-digit"}), props.date.getFullYear()]

    return (
        <div className="expense-date">
            <div className="expense-date__month">{ requiredMonth }</div>
            <div className="expense-date__day">{ requiredDay }</div>
            <div className="expense-date__year">{ requiredYear }</div>
        </div>
    );
}

export default ExpenseDate;