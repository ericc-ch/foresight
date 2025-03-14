import { createFileRoute } from "@tanstack/react-router"

import { Features } from "./-components/Features"
import { Footer } from "./-components/Footer"
import { Hero } from "./-components/Hero"
import { Navbar } from "./-components/Navbar"
import { Showcase } from "./-components/Showcase"
import { Testimonials } from "./-components/Testimonials"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-base-200 flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Showcase />
      <Footer />
    </div>
  )
}
