export function Footer({ expense, onDelete }) {
  let sum = expense.reduce(
    (total, item) => total + Number(item.amount) * Number(item.quantity),
    0
  );

  return (
    <div className="footer">
      <div className="summary">
        <button onClick={onDelete}>Delete All</button>
        <span>Total: </span>
        <p>
          {sum > 1 ? "SAR" : ""} {sum}
        </p>
      </div>
    </div>
  );
}
