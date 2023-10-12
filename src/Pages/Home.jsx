import { useEffect, useState } from "react";
import Card from "../components/Card";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [usd, setUsd] = useState();
  const [usdOficial, setUsdOficial] = useState();
  useEffect(() => {
    const promises = Promise.all([
      fetch("http://escuderokevin.com.ar:7070/api/dolarblue"),
      fetch("http://escuderokevin.com.ar:7070/api/dolaroficial"),
    ]);
    promises.then(async (values) => {
      const blue = await values[0].json();
      const oficial = await values[1].json();
      blue.name = "DOLÁR BLUE";
      setUsd(blue);
      oficial.name = "DOLÁR OFICIAL";
      setUsdOficial(oficial);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-4 grid gap-4">
      <h1 className=" text-2xl">DÓLAR DEL MOMENTO</h1>
      {isLoading ? (
        <section>
          <h1>Loading</h1>
        </section>
      ) : (
        <div className=" grid gap-8">
          <section className="flex w-full flex-col justify-center gap-4 sm:flex-row ">
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
