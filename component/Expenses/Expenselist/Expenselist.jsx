import React from "react";
 import ExpenseItem from "../expenseitem/ExpenseItem";

const Expenselist =(props) => {
     
    const {expenses = []} = props;
    return(
    <>
        {expenses.map((each_expense) => <ExpenseItem
        title={each_expense.title}
        amount={each_expense.amount}
        date={each_expense.date}
        />)}
        </>
    )


}

export default Expenselist;