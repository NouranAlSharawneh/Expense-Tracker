export function Main({ expense }) {
  return (
    <div className="body">
      <div className="grow1">
        <h3>Date</h3>
        {expense.map((item) => (
          <p>{item.date}</p>
        ))}
      </div>
      <div className="grow1">
        <h3>Name</h3>
        {expense.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
      <div className="grow1">
        <h3>Quantity</h3>
        {expense.map((item) => (
          <p>{item.quantity}</p>
        ))}
      </div>
      <div className="grow1">
        <h3>Price</h3>
        {expense.map((item) => (
          <p>SAR {item.amount * item.quantity}</p>
        ))}
      </div>
    </div>
  );
}
