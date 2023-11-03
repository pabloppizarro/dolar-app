import { useEffect, useState } from "react";
import Card from "../components/Card";
import CurrencyConverter from "../components/CurrencyConverter";
import LiteCard from "../components/LiteCard";

import { useQuery } from "@tanstack/react-query";
export default function Home() {
  // const [isLoading, setLoading] = useState(false);

  const nacionQuery = useQuery({
    queryKey: ["lanacion"],
    queryFn: fetchDolar,
  });
  const blueQuery = useQuery({
    queryKey: ["blue-dolarhoy"],
    queryFn: fetchDolar,
  });
  const oficialQuery = useQuery({
    queryKey: ["oficial-dolarhoy"],
    queryFn: fetchDolar,
  });

  return (
    <div className="mx-4 mt-4 grid gap-4">
      <h1 className=" text-2xl">DÓLAR DEL MOMENTO</h1>
      <div className="grid  grid-cols-1 gap-2  md:grid-cols-2">
        <section className="flex w-full flex-col  gap-2 ">
          <Card
            data={blueQuery.data}
            isError={blueQuery.isError}
            isLoading={blueQuery.isLoading}
          />
          <Card
            data={oficialQuery.data}
            isError={oficialQuery.isError}
            isLoading={oficialQuery.isLoading}
          />
          {/* <Card props={oficialDolarHoyQuery} /> */}
        </section>
        <section className="grid">
          {nacionQuery.isLoading ? <p className="m-auto">loading...</p> : ""}
          {nacionQuery.isError ? <p>Error en servicio La Nación.</p> : ""}
          {nacionQuery.isSuccess
            ? nacionQuery.data.map((item, i) => (
                <LiteCard props={item} key={i}></LiteCard>
              ))
            : ""}
        </section>
      </div>
      <section>
        {blueQuery.data ? <CurrencyConverter props={blueQuery.data} /> : ""}
      </section>
    </div>
  );
}

async function fetchDolar({ queryKey }) {
  const response = await fetch(`${process.env.REACT_APP_API}/${queryKey}`);
  if (!response.ok) {
    throw new Error("Error en llamado a datos.");
  }
  return response.json();
}
