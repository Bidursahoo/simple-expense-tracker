import React from 'react'
import AllExpensesItems from './components/Expenses/AllExpensesItems';
import Card from './components/UI/Card.jsx';




function App() {
  const expenses = [
    {
      id:"a1",
      title:"Udemy Course",
      amount : 250,
      date : new Date()
    },
    {
      id:"a2",
      title:"Web developemnt Course",
      amount : 269,
      date : new Date()
    },
  ]
  return (
    <Card className='expenses'>
      
      <AllExpensesItems expenses={expenses}/>
    </Card>
  );
}

export default App;
