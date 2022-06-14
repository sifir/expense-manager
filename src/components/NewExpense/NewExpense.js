import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShowingNew, setShowNewExpense] = useState(false);

  const showNewExpenseHandler = () => {
    setShowNewExpense(true);
  };

  const notShowNewExpenseHandler = () => {
    setShowNewExpense(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    //funcion para pasarle al child asi puede devolverme datos
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //paso data al nivel de arriba
    props.onAddExpense(expenseData);
    setShowNewExpense(false)
  };

  return (
    <div className="new-expense">
      {!isShowingNew && (
        <button onClick={showNewExpenseHandler}>Add New Expense</button>
      )}

      {isShowingNew && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onPressCancel={notShowNewExpenseHandler} />
      )}
    </div>
  );
};

export default NewExpense;
