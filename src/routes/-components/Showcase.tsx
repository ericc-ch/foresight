interface ShowcaseItemProps {
  title: string
  description: string
}

function ShowcaseItem({ title, description }: ShowcaseItemProps) {
  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
export function Showcase() {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          🖼️ Projects (Slightly More Impressive Than "Hello World")
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ShowcaseItem
            description="The quintessential demo app. We've got you covered with adding, deleting, and even (gasp!) marking tasks as complete."
            title="To-Do List App: Still Relevant in 2023!"
          />

          <ShowcaseItem
            description="Browse a curated collection of... cat photos. Powered by cutting-edge technology (and maybe an Unsplash API)."
            title="Cat Photo Gallery: Because the Internet."
          />

          <ShowcaseItem
            description="Behold, a blog! With posts! And... pagination! We're pushing the boundaries of starter template technology here."
            title="Slightly More Complex Blog: We Added Pagination!"
          />
        </div>
      </div>
    </section>
  )
}
