import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/books/")({
  component: Books,
})

function Books() {
  return (
    <div className="bg-base-200 flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          📚 Bookshelf (Mostly Unread)
        </h2>

        <div className="alert alert-info mb-8">
          <svg
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>
            Warning: This list is 73% aspirational and 27% actual reading
            progress
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Book Card 1 */}
          <div className="card bg-base-100 shadow-xl transition-all hover:shadow-2xl">
            <figure className="px-4 pt-4">
              <img
                alt="Philosophical Tome"
                className="h-64 w-full rounded-xl object-cover transition-transform hover:scale-105"
                src="https://picsum.photos/400/600?random=1"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">How to Pretend You've Read Hegel</h3>
              <div className="badge badge-outline">Philosophy</div>
              <p className="text-sm opacity-75">Collecting dust since 2021</p>
              <progress
                className="progress progress-primary w-full"
                max="100"
                value="15"
              ></progress>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="card bg-base-100 shadow-xl transition-all hover:shadow-2xl">
            <figure className="px-4 pt-4">
              <img
                alt="Programming Book"
                className="h-64 w-full rounded-xl object-cover transition-transform hover:scale-105"
                src="https://picsum.photos/400/600?random=2"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">
                JavaScript: The Parts I Actually Use
              </h3>
              <div className="badge badge-outline">Tech</div>
              <p className="text-sm opacity-75">
                Chapter 3, paragraph 2... forever
              </p>
              <progress
                className="progress progress-secondary w-full"
                max="100"
                value="42"
              ></progress>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="card bg-base-100 shadow-xl transition-all hover:shadow-2xl">
            <figure className="px-4 pt-4">
              <img
                alt="Cookbook"
                className="h-64 w-full rounded-xl object-cover transition-transform hover:scale-105"
                src="https://picsum.photos/400/600?random=3"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Recipes for Instant Regret</h3>
              <div className="badge badge-outline">Culinary</div>
              <p className="text-sm opacity-75">
                Mostly takeout menus bookmarked here
              </p>
              <progress
                className="progress progress-accent w-full"
                max="100"
                value="88"
              ></progress>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm opacity-75">
          * Actual reading progress may vary. Mostly varies downward.
        </div>
      </div>
    </div>
  )
}
