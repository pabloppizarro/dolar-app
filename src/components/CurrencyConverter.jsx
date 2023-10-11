export default function CurrencyConverter() {
  return (
    <div>
      <h3>Calculo valores</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="grid gap-8"
      >
        <fieldset className="flex justify-center gap-4">
          <legend>Compra USD. </legend>
          <div className="block rounded-lg border bg-[#F5F5F5] p-4  text-start font-bold hover:border-amber-300">
            <p>Pagas</p>
            <span>AR$</span>
            <input
              className=" mt-1 h-max appearance-none bg-[#F5F5F5]  focus:outline-none"
              type="number"
              name="usd"
              placeholder="12000"
              required
            />
          </div>
          <div>
            <div className="block rounded-lg border bg-[#F5F5F5] p-4 text-start  font-bold hover:border-amber-300">
              <p>Recibis</p>
              <span>U$D</span>
              <input
                className=" mt-1 h-max appearance-none bg-[#F5F5F5]  focus:outline-none"
                type="number"
                name="ars"
                placeholder="12000"
                required
              />
            </div>
          </div>
        </fieldset>
        <button>Limpiar</button>
      </form>
    </div>
  );
}
