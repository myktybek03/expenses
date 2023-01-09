import { useState } from "react"
import Button from "../UI/button/Button"
import FormInput from "../UI/form-input/FormInput"
import "./ExpenseForm.css"

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState(null)

  const cancelHandler = (event) => {
    event.preventDefault()
    props.onShowForm()
  }

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const priceInputChangeHandler = (event) => {
    const value = event.target.value
    if (value.charAt(0) !== "-") {
      setPrice(value)
    }
  }

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const saveHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title,
      date,
      price,
    }
    props.onNewExpenseAdd(expenseData)
  }

  return (
    <form>
      <div className="expense-form_input">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите..."
          value={title}
          onChange={titleInputChangeHandler}
        />
        <FormInput
          id="price"
          labelName="Количество денег"
          inputType="number"
          value={price}
          onChange={priceInputChangeHandler}
        />
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гг"
          onChange={dateInputChangeHandler}
        />
      </div>

      <div className="button">
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Сохранить" onClick={saveHandler} />
      </div>
    </form>
  )
}
