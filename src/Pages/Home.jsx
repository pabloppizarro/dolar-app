import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <h1>Hola Home!</h1>
      <section className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
        <Card buy={1050} sale={1140} />
        <Card buy={1050} sale={1140} />
        <Card buy={1050} sale={1140} />
        <Card buy={1050} sale={1140} />
      </section>
    </div>
  );
}
