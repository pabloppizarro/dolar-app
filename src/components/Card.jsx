export default function Card({ buy, sale }) {
  return (
    <article className="card bg-slate-200 shadow-md">
      <small>Precio hoy USD/ARS</small>
      <p> {`$${buy} / $${sale}`}</p>
      <div>
        <button>Report</button>
      </div>
    </article>
  );
}
