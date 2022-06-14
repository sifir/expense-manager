import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY)
  // cuando su hijo usa esta funcion, agrego el expense a mi estado
  // siempre que updatee un state dependiendo del anterior pasar funcion como arg!
  // asi recibe el ultimo snapshot del estado usado
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses]
    })
  }

  return (
    <div>
      {/* paso puntero para que me devuelva informacion */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
