import { Link } from "@tanstack/react-router"

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl" href="/">
          Vite Starter
        </a>
      </div>
      <div className="flex-none">
        <Link
          className="btn btn-ghost text-lg transition-transform hover:scale-105"
          to="/books"
        >
          📚 Bookshelf
        </Link>
        <button className="btn-ghost btn-sm btn rounded-btn" type="button">
          Get Started
        </button>
        <button className="btn-ghost btn-sm btn rounded-btn" type="button">
          Github
        </button>
      </div>
    </div>
  )
}
