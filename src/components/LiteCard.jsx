export default function LiteCard({ props }) {
  return (
    <article className=" my-2 flex  w-full items-center gap-2 rounded-md border p-2">
      <div className="flex items-center gap-2">
        <h3 className=" text-lg font-bold">{props.title}</h3>
        <small className=" m-auto rounded-xl bg-amber-100 p-1">
          {props.house}
        </small>
      </div>
      <div className="flex items-center gap-2">
        {props.buy ? (
          <>
            <small>Compra</small>
            <p> {`$${props.buy}`}</p>
          </>
        ) : (
          ""
        )}

        <small>Venta</small>
        <p> {`$${props.sell}`}</p>
      </div>
    </article>
  );
}
