import React from 'react'
import './ExpensesItems.css'
import Expenses from './Expenses';
export default function AllExpensesItems(props) {
  return (
    <>
        {props.expenses.map((expense)=>{
        return( <Expenses expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount}/>)
      })}
    </>
  )
}
