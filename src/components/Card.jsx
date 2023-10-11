export default function Card({ buy, sale }) {
  return (
    <article className="card grid grid-cols-1 gap-4 bg-slate-200 p-4 text-center shadow-md">
      <small>Precio hoy USD/ARS</small>
      <h3 className=" text-xl"> {`$${buy} / $${sale}`}</h3>
      <div>
        <button className=" rounded-full bg-white p-4">Report</button>
      </div>
    </article>
  );
}
