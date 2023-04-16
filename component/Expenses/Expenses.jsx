import React from "react";
import './Expenses.css';
import ExpenseList from "./Expenselist/Expenselist";


const Expenses = (props) => {
    const {expenses = []} = props;
    return(
        <>
            <div className="expenses">
                {/* expense filter */}
                {/* expense list */}

                <ExpenseList expenses = {expenses} />

            </div>
        </>
    );
}


export default Expenses;