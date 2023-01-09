import { useState } from "react"
import { Expenses } from "./components/expenses/Expenses"
import { NewExpenses } from "./components/new-expenses/NewExpenses"
import "./App.css"

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Туалетная бумага",
      price: 300,
      date: new Date(),
    },
    {
      title: "Зараядник",
      price: 400,
      date: new Date(),
    },
  ])
  const addNewExpenseHandler = (data) => {
    // const updatedExpenses = [...expenses]
    // updatedExpenses.push(data)
    // setExpenses(updatedExpenses)
    setExpenses((prevState) => [...prevState, data])
  }

  return (
    <div className="App">
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
