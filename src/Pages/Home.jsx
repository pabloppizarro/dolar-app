import { useEffect, useState } from "react";
import Card from "../components/Card";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [usd, setUsd] = useState();
  const [usdOficial, setUsdOficial] = useState();
  useEffect(() => {
    fetch("http://escuderokevin.com.ar:7070/api/dolarblue")
      .then((res) => res.json())
      .then((usd) => {
        // setLoading(false);
        usd.name = "DOLÁR BLUE";
        setUsd(usd);
      });
    fetch("http://escuderokevin.com.ar:7070/api/dolaroficial")
      .then((res) => res.json())
      .then((usd) => {
        setLoading(false);
        usd.name = "DOLÁR OFICIAL";
        setUsdOficial(usd);
      });
  }, []);

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl">Simple visor de cotización USD</h1>
      {isLoading ? (
        <section>
          <h1>Loading</h1>
        </section>
      ) : (
        <div className=" grid gap-8">
          <section className="flex w-full flex-row justify-center gap-4 ">
            <Card props={usd} />
            <Card props={usdOficial} />
          </section>
          <section>
            <CurrencyConverter props={usd} />
          </section>
        </div>
      )}
    </div>
  );
}
