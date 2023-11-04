import { useId } from "react";

//redux: nos permite ejecutar acciones en nuestro store
import { useDispatch } from "react-redux";
import { selectUSD } from "../stores/usdSelectedSlice";
import { useSelector } from "react-redux";
export default function Card({ data, isLoading, isError }) {
  const dispatch = useDispatch();
  const selectedUSD = useSelector((state) => state.selectedUSD.value);
  return (
    <article
      className=" currency-card relative mx-auto my-0 cursor-pointer hover:shadow-lg"
      style={{
        border:
          selectedUSD && selectedUSD.title === data.title ? "2px solid" : "",
      }}
      onClick={() => {
        if (!data) return;
        dispatch(selectUSD({ ...data, checked: data.checked ?? false }));
      }}
    >
      {data ? (
        <>
          <div>
            <input
              className=" absolute right-0 m-2"
              type="checkbox"
              name="usdSelected"
              checked={selectedUSD && selectedUSD.title === data.title}
              onChange={($event) =>
                dispatch(selectUSD({ ...data, checked: $event.target.checked }))
              }
            />
            <h3 className=" text-lg font-bold">{data.title}</h3>
            <small className=" m-auto rounded-xl bg-amber-100 p-1">
              {data.house}
            </small>
          </div>

          <div className="grid grid-cols-2 justify-center gap-2">
            <div className="rounded-lg border p-2">
              <h3 className=" content object-fill text-xl">COMPRA</h3>
              <p className="text-2xl font-bold tabular-nums">
                {" "}
                {`$${data.buy}`}
              </p>
            </div>
            <div className="rounded-lg border p-2">
              <h3 className=" text-xl">VENTA</h3>
              <p className="text-2xl font-bold  tabular-nums">{`$${data.sell}`}</p>
            </div>
          </div>
          <div>
            <p className=" rounded-full bg-amber-300 font-poppinsBold">
              <small>últ. act: </small>
              {data.date}
            </p>
          </div>
        </>
      ) : null}
      {isLoading ? <p className=" m-auto">Cargando...</p> : ""}
      {isError ? <p>No hay datos..</p> : ""}
    </article>
  );
}
