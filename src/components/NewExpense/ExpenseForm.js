import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // guardo los estados, empiezan vacios
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /*  guardar todos en un mismo estado
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */

  //guardar en el estado para no perder lo introducido
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*      haciendolo de esta forma se asegura de estar haciendolo en el estado mas nuevo,
        hay que hacerlo asi siempre que tu estado actual dependa del anterior:  */
    /*         setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle : event.target.value
            }
        }) */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*         setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount : event.target.value
            }
        }) */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*         setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate : event.target.value
            }
        }) */
  };

  const submitHandler = (event) => {
    //para que no recargue la pagina en submit
    event.preventDefault();

    //combinar los estados
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData)

    //limpiar el input en submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onPressCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
