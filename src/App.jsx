import "./App.css";

const data = [
  {
    id: 45678,
    date: "2020-11-23",
    name: "phone",
    quantity: 2,
    amount: 789,
  },
  {
    id: 45678,
    date: "2020-11-23",
    name: "windows laptop",
    quantity: 3,
    amount: 2789,
  },
  {
    id: 45678,
    date: "2020-11-23",
    name: "phone",
    quantity: 4,
    amount: 789,
  },
];

console.log(data);
export default function App() {
  return (
    <section className="layout">
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </section>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Expense Tracker</h1>
    </div>
  );
}

function SideBar() {
  return (
    <div className="leftSide">
      <form>
        <input type="text" name="name" placeholder="Expense Name" />
        <input type="text" name="quantity" placeholder="Quantity" />
        <input type="text" name="amount" placeholder="Amount" />
        <input type="date" name="date" placeholder="Date" />
        <button className="side--btn">Add Expense</button>
      </form>
    </div>
  );
}

function Main() {
  return (
    <div className="body">
      <div className="grow1">
        <h3>Date</h3>
        {data.map((item) => (
          <p>{item.date}</p>
        ))}
      </div>
      <div className="grow1">
        <h3>Quantity</h3>
        {data.map((item) => (
          <p>SAR {item.quantity}</p>
        ))}
      </div>
      <div className="grow1">
        <h3>Name</h3>
        {data.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
      <div className="grow1">
        <h3>Amount</h3>
        {data.map((item) => (
          <p>SAR {item.amount}</p>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="summary">
        <button>Delete All</button>
        <span>Total: </span>
        <p>SAR 678</p>
      </div>
    </div>
  );
}
