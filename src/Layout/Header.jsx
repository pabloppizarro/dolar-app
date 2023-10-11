import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-full w-auto bg-black px-16 text-center text-white">
      <nav className="w-screen">
        <ul className="flex h-10 ">
          <li className="dolar-li">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="dolar-li">
            <Link>GitHub</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
