export function Features() {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          ✨ Features (We Actually Bothered to Include)
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Vite Velocity 🚀</h3>
              <p>
                Powered by Vite, experience lightning-fast development and build
                times. Hot reloading so fast, you'll think your code is psychic.
                Okay, maybe not psychic, but definitely faster than waiting for
                your coffee to brew. We're talking sub-second updates here. Take
                that, you slow-reloading frameworks! (We're looking at nobody in
                particular).
              </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">React Magic ✨</h3>
              <p>
                Built with React, enjoy a component-based architecture for
                reusable UI and maintainable code. It's React. Do we really need
                to sell you on this? Okay, fine. Components, hooks, JSX, the
                whole shebang. Build reusable UI like a boss. Or at least like
                someone who knows what reusable UI is.
              </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">PocketBase Powerhouse 🗄️</h3>
              <p>
                Backed by PocketBase, get a simple and efficient backend out of
                the box. Backend setup usually make you want to cry? PocketBase
                is here to change that. Database, authentication, admin panel –
                all in a single binary. It's like magic, but without the rabbits
                and top hats. Perfect for side projects, MVPs, or when you just
                really don't want to deal with a "real" backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
