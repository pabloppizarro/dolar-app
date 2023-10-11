import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
];
export default function Header() {
  return (
    <header className="flex h-full w-auto bg-black px-16 text-center text-white">
      <nav className="w-screen">
        <ul className="flex h-10 gap-4 ">
          {navItems.map((item, i) => (
            <li key={i} className="dolar-li-header">
              <Link to={`${item.url}`}>{item.name}</Link>
            </li>
          ))}
          <a
            className="dolar-li-header"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pabloppizarro/dolar-app"
          >
            Github!
          </a>
        </ul>
      </nav>
    </header>
  );
}
