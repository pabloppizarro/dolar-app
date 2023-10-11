export default function Card({ buy, sale, date }) {
  return (
    <article className="currency-card">
      <p>DÓLAR BLUE</p>

      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="rounded-lg border p-2">
          <h3 className=" content object-fill text-xl">COMPRA</h3>
          <p className="text-2xl font-bold"> {`$${buy}`}</p>
        </div>
        <div className="rounded-lg border p-2">
          <h3 className=" text-xl">VENTA</h3>
          <p className="text-2xl font-bold"> {`$${sale}`}</p>
        </div>
      </div>
      <div>
        <p className=" rounded-full bg-amber-300 font-bold">
          <small>últ. act: </small>
          {date.split(" ")[1]}
        </p>
      </div>
    </article>
  );
}
