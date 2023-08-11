import React from 'react'
import './ExpensesItems.css'
export default function Date(props) {
    const month = props.dat.toLocaleString('en-IN' , {month: "long"});
    const day = props.dat.toLocaleString('en-IN' , {day: "2-digit"});
    const year = props.dat.getFullYear();
  return (
    <>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </>
  )
}
