export function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - Made with ❤️ by{" "}
          <a
            className="link-hover link-primary"
            href="https://github.com/octocat"
          >
            you
          </a>
        </p>
      </div>
    </footer>
  )
}
