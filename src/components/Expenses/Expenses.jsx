import React from 'react'
import './ExpensesItems.css'
import Date from './ExpenseDate'
import Card from '../UI/Card.jsx'
export default function Expenses(props) {
  return (
    <Card className='expense-item'>
        <div className='expense-date'><Date dat={props.expenseDate}/></div>
        
        <div className='expense-item__description'>
            <h2>{props.expenseTitle}</h2>
            <div className='expense-item__price'>Rs.{props.expenseAmount}</div>
        </div>
    </Card>
  )
}
