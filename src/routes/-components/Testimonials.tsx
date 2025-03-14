export function Testimonials() {
  return (
    <section className="bg-base-300 text-base-content py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold">
          🗣️ Rave Reviews (Probably Exaggerated)
        </h2>
        <div className="carousel carousel-center rounded-box space-x-4 p-4">
          <div className="carousel-item">
            <div className="card w-96 shadow-xl">
              <div className="card-body">
                <p>
                  "Finally, a stack that lets me focus on building instead of
                  configuring. I used to spend weeks setting up my dev
                  environment. Now, with this stack, I spend weeks... actually
                  building things! It's revolutionary! My productivity has
                  increased by at least 300%, or maybe I'm just finally getting
                  enough sleep."
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-primary">
                    - Definitely Not a Paid Actor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 shadow-xl">
              <div className="card-body">
                <p>
                  "Honestly, I was skeptical. Another starter template? But then
                  I tried it. And my life changed. Birds started singing, the
                  sun shone brighter, and my sourdough starter finally rose.
                  Coincidence? I think not."
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-primary">
                    - Sourdough Enthusiast &amp; Web Dev
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 shadow-xl">
              <div className="card-body">
                <p>
                  "I migrated my entire enterprise application to this stack.
                  Just kidding! But for my side project, it's been amazing. So
                  simple, so fast. I actually launched something! My therapist
                  is thrilled."
                </p>

                <div className="card-actions justify-end">
                  <div className="badge badge-primary">
                    - Side Project Superstar (and Therapy Regular)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
