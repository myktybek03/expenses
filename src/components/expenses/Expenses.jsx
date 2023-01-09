import React from "react"
import { ExpenseItem } from "../expense-item/ExpenseItem"
import "./Expenses.css"

export const Expenses = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        )
      })}
    </ul>
  )
}
