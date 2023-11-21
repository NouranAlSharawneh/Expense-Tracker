/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Main } from "./components/Main.1";
import { Footer } from "./components/Footer";

export default function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [date, setDate] = useState("");
  const [expense, setExpense] = useState([]);

  function handleSubmit(newData) {
    setExpense((data) => [...data, newData]);
  }

  function handleDelete(e) {
    e.preventDefault();
    if (
      window.confirm("Are you sure you want to delete all of your expenses?")
    ) {
      setExpense([]);
    }
  }

  return (
    <section className="layout">
      <Header />
      <SideBar
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
        quantity={quantity}
        setQuantity={setQuantity}
        date={date}
        setDate={setDate}
        onHandleSubmit={handleSubmit}
      />
      <Main expense={expense} />
      <Footer expense={expense} onDelete={handleDelete} />
    </section>
  );
}

// ... (rest of the code remains the same)
