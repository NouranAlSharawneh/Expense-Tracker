export function SideBar({
  name,
  setName,
  amount,
  setAmount,
  quantity,
  setQuantity,
  date,
  setDate,
  onHandleSubmit,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !amount || !quantity || !date) return;

    const id = crypto.randomUUID();
    const newData = {
      id: id,
      date,
      name,
      quantity,
      amount,
    };

    onHandleSubmit(newData);
    setName("");
    setDate("");
    setAmount("");
    setQuantity("");
  }

  return (
    <div className="leftSide">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Expense Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button className="side--btn">Add Expense</button>
      </form>
    </div>
  );
}
