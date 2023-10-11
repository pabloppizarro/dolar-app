import Card from "../components/Card";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl">Simple visor de cotización USD</h1>
      <section className="flex w-full flex-row justify-center gap-4 ">
        <Card date={"2023/10/11 18:17:38"} buy={1050} sale={1140} />
        <Card date={"2023/10/11 18:17:38"} buy={1050} sale={1140} />
      </section>
      <section>
        <CurrencyConverter />
      </section>
    </div>
  );
}
