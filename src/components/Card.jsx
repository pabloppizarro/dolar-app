import { useId } from "react";

export default function Card({ props }) {
  const id = useId();
  return (
    <article className="currency-card mx-auto my-0 sm:mx-0 ">
      <p>{props.name}</p>

      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="rounded-lg border p-2">
          <h3 className=" content object-fill text-xl">COMPRA</h3>
          <p className="text-2xl font-bold"> {`$${props.buy}`}</p>
        </div>
        <div className="rounded-lg border p-2">
          <h3 className=" text-xl">VENTA</h3>
          <p className="text-2xl font-bold"> {`$${props.sell}`}</p>
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
