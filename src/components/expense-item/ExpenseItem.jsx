import React from "react"
import "./ExpenseItem.css"

export const ExpenseItem = ({ date, title, price }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{date.toString()}</div>
      <h2 className="title">{title}</h2>
      <div className="item">
        <span className="price">{price} сом</span>
      </div>
    </div>
  )
}
