import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filtro la lista a mostrar dependiendo si cumple con una funcion
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
{/*     EJEMPLO
        usando el and operator devuelve la parte del and si cumple la 1era condicion
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        if tiene items, los muestra
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items ={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
