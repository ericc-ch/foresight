export function Hero() {
  return (
    <section
      className="hero bg-contain"
      style={{ backgroundImage: "url('/popcat.gif')" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content py-32 text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">🚀 The "Good Enough" Stack</h1>
          <p className="py-6">
            Tired of frameworks that promise enterprise-level scalability for
            your cat photo blog? Yeah, us too. We built this starter with Vite,
            React, and PocketBase because sometimes, "good enough" is actually
            perfect. Especially when you'd rather be shipping than wrestling
            with config files. Look, we even have a popcat. Next.js doesn't have
            a popcat. Just sayin'.
          </p>
          <button className="btn btn-primary" type="button">
            ✨ Get Started (and Maybe Actually Finish Something)
          </button>
        </div>
      </div>
    </section>
  )
}
