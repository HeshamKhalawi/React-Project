import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props){
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expensesDetails[0].title} date={props.expensesDetails[0].date} amount={props.expensesDetails[0].amount}/>
            <ExpenseItem title={props.expensesDetails[1].title} date={props.expensesDetails[1].date} amount={props.expensesDetails[1].amount}/>
            <ExpenseItem title={props.expensesDetails[2].title} date={props.expensesDetails[2].date} amount={props.expensesDetails[2].amount}/>
            <ExpenseItem title={props.expensesDetails[3].title} date={props.expensesDetails[3].date} amount={props.expensesDetails[3].amount}/>
        </Card>
    );
}

export default Expenses;