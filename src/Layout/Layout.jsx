import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      {/* <h2>Hola</h2> */}
      <main className="m-auto w-10/12 text-center">
        <Outlet />
      </main>
    </div>
  );
}
