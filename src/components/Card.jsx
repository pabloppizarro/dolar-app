import { useId } from "react";

export default function Card({ props }) {
  // const id = useId();
  return (
    <article className="currency-card mx-auto my-0">
      <div>
        <h3 className=" text-lg font-bold">{props.title}</h3>
        <small className=" m-auto rounded-xl bg-amber-100 p-1">
          {props.house}
        </small>
      </div>

      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="rounded-lg border p-2">
          <h3 className=" content object-fill text-xl">COMPRA</h3>
          <p className="text-2xl font-bold tabular-nums"> {`$${props.buy}`}</p>
        </div>
        <div className="rounded-lg border p-2">
          <h3 className=" text-xl">VENTA</h3>
          <p className="text-2xl font-bold  tabular-nums">{`$${props.sell}`}</p>
        </div>
      </div>
      <div>
        <p className=" rounded-full bg-amber-300 font-poppinsBold">
          <small>últ. act: </small>
          {props.date}
        </p>
      </div>
    </article>
  );
}
