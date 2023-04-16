import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "../expensedate/expensedate";


const ExpenseItem = (props) => {

    

    console.log('ExpenseItem',props);
    const {title,amount,date} = props;

    let[Modifiedtitle,setModifiedtitle]=useState(title);
    const onTitlechange =() =>{
        setModifiedtitle("Updated");
        console.log(Modifiedtitle);
    }


    return(
    <>
    <div className="expense-item">
        <ExpenseDate date={date} />
    
        <div className="expense-item__description ">
            <h2>{Modifiedtitle}</h2>
           <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={onTitlechange}>Update</button>
    </div>
    </>
    );
};


export default ExpenseItem;
