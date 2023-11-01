import { useEffect, useState } from "react";
import Card from "../components/Card";
import CurrencyConverter from "../components/CurrencyConverter";
import LiteCard from "../components/LiteCard";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [usd, setUsd] = useState();
  const [usdOficial, setUsdOficial] = useState();
  const [laNacionUSD, setLaNacionUSD] = useState([]);
  useEffect(() => {
    const promises = Promise.all([
      fetch(`${process.env.REACT_APP_API}/blue-dolarhoy`),
      fetch(`${process.env.REACT_APP_API}/oficial-dolarhoy`),
      fetch(`${process.env.REACT_APP_API}/lanacion`),
    ]);
    promises.then(async (values) => {
      const blue = await values[0].json();
      const oficial = await values[1].json();
      setLaNacionUSD(await values[2].json());
      setUsd(blue);
      setUsdOficial(oficial);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mx-4 mt-4 grid gap-4">
      <h1 className=" text-2xl">DÓLAR DEL MOMENTO</h1>
      {isLoading ? (
        <section>
          <h1>Loading</h1>
        </section>
      ) : (
        <>
          <div className="grid  grid-cols-1 gap-2  md:grid-cols-2">
            <section className="flex w-full flex-col  gap-2 ">
              <Card props={usd} />
              <Card props={usdOficial} />
            </section>
            <section className="grid">
              {laNacionUSD.map((item, i) => (
                <LiteCard props={item} key={i}></LiteCard>
              ))}
            </section>
          </div>
          <section>
            <CurrencyConverter props={usd} />
          </section>
        </>
      )}
    </div>
  );
}
