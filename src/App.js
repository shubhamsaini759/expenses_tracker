import NewExpenses from "./components/NewExpenses";
import Expenses from "./components/Expenses";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Paper",
    amount: 229.5,
    date: new Date(2022, 7, 14),
  },

  {
    id: "e2",
    title: "Magazine",
    amount: 40.9,
    date: new Date(2022, 8, 12),
  },

  {
    id: "e3",
    title: "Laptop",
    amount: 300,
    date: new Date(2022, 5, 10),
  },

  {
    id: "e4",
    title: "Mobile Phone",
    amount: 200,
    date: new Date(2022, 6, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
