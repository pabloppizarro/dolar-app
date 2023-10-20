import { useState } from "react";

export default function CurrencyConverter({ props }) {
  const [sell, setSell] = useState("");
  const [buy, setBuy] = useState("");
  const [formatErr, setFormatErr] = useState(false);
  return (
    <article className="converter m-auto max-w-[600px] rounded-lg border border-b-slate-400  p-4">
      <h3 className=" mb-1 text-2xl">Convertidor a U$D BLUE</h3>
      {formatErr ? <p className=" text-rose-500">Formato incorrecto</p> : ""}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="grid gap-8"
      >
        <fieldset className="flex flex-col justify-center gap-4 sm:flex-row">
          <div className="block rounded-lg border bg-[#F5F5F5]  p-4 text-start font-bold hover:border-amber-300">
            <p>Pagás AR$</p>
            <label>
              $
              <input
                className="m-1 h-max  appearance-none bg-[#F5F5F5] text-lg  focus:outline-none"
                name="ars"
                placeholder="12000"
                value={sell}
                type="number"
                onChange={($event) => {
                  setSell($event.target.value);
                  const number = Number($event.target.value);
                  if (!number) {
                    setFormatErr(true);
                    return;
                  } else {
                    setFormatErr(false);
                  }
                  const toBuy = number / props.sell;
                  setBuy(toBuy.toFixed(2));
                }}
              />
            </label>
          </div>
          <div>
            <div className=" block rounded-lg border bg-[#F5F5F5] p-4 text-start  font-bold hover:border-amber-300">
              <p>Recibís U$D</p>
              <label>
                $
                <input
                  className="m-1 h-max  appearance-none bg-[#F5F5F5] text-lg  focus:outline-none"
                  name="usd"
                  placeholder="12000"
                  value={buy}
                  onChange={($event) => {
                    setBuy($event.target.value);
                    const number = Number($event.target.value);
                    if (!number) {
                      setFormatErr(true);
                      return;
                    } else {
                      setFormatErr(false);
                    }
                    const toSell = number * props.buy;
                    setSell(toSell.toFixed(2));
                  }}
                />
              </label>
            </div>
          </div>
        </fieldset>
        <button
          className=" mx-auto my-0 w-1/3 max-w-xs rounded-full bg-amber-200 py-2 shadow-md  hover:bg-amber-300 hover:shadow-lg"
          onClick={() => {
            setBuy("");
            setSell("");
          }}
        >
          Limpiar
        </button>
      </form>
    </article>
  );
}

// const getArsCurrency = (num) =>
//   new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(
//     num,
//   );
// const getUSDCurrency = (num) =>
//   new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(
//     num,
//   );
// function calcExchange(e) {
//   console.log(e.target.value);

// }
